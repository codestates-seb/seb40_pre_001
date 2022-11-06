package team001_be.stackoverflowCloneDemo.question.service;

import lombok.Getter;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;
import team001_be.stackoverflowCloneDemo.question.repository.QuestionRepository;
import team001_be.stackoverflowCloneDemo.tag.service.TagService;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Transactional
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final UserService userService;
    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, UserService userService, TagService tagService) {
        this.questionRepository = questionRepository;
        this.userService = userService;
        this.tagService = tagService;
    }

    public Question createQuestion(Question question, Long userId) {
        question.setUser(userService.findUser(userId));
        verifyQuestion(question); //존재하는 회원, tag인지 check

        //question -> questionTagList의 questionTag별로 question저장하는 로직
        List<QuestionTag> questionTags = question.getQuestionTagList().stream()
                .map(questionTag -> {
                    questionTag.setQuestion(question);
                    questionTag.setTag(tagService.findTag(questionTag.getTag().getTagId()));
                    return questionTag;
                }).collect(Collectors.toList());
        question.setQuestionTagList(questionTags);


        return saveQuestion(question);
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestionById(questionId);
    }

    public List<Question> getAllQuestions() {
//        List<Question> questionList = questionRepository.findAll();
        List<Question> questionList = questionRepository.findAllByOrderByCreatedAtDesc().orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return questionList;
    }

    public List<Question> searchQuestionsByTitle(String title) {
        Optional<List<Question>> questionList = questionRepository.findByQuestionTitleContaining(title);
        List<Question> foundQuestionList = questionList.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        //수정 필요!!!! stream으로 찾아야??
        return foundQuestionList;
    }

    public void updateQuestionViewCount(Question question, Long viewCount) {
        Question foundQuestion = findQuestion(question.getQuestionId());
        question.updateViewCount(viewCount + 1);
        saveQuestion(question);
    }


    public Question updateQuestion(Question question, Long userId) {
        Question foundQuestion = findQuestion(question.getQuestionId());

        //user 권한 확인하기.. jwt 구현되면 다시 살펴봐야 할듯
        userService.verifyUserAuthorization(userId, foundQuestion.getUser().getUserId());

        //title, context, tagList 수정.
        //수정할 값이 null인 경우 수정하지 않는다.
        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(foundQuestion::setQuestionTitle);
        Optional.ofNullable(question.getContext())
                .ifPresent(foundQuestion::setContext);
        Optional.ofNullable(question.getQuestionTagList())
                .ifPresent(foundQuestion::setQuestionTagList);

        return saveQuestion(foundQuestion);
    }

    public void deleteQuestion(Long questionId, Long userId) {
        Question question = findVerifiedQuestionById(questionId);
        userService.verifyUserAuthorization(question.getUser().getUserId(), userId);

        questionRepository.delete(question);
    }

    private void verifyQuestion(Question question) {
        //회원이 존재하는지 확인, @Transactional이기에 runtime exception발생시 자동 롤백됨
        userService.findUser(question.getUser().getUserId());
        if (question.getQuestionId() != null) {
            //Tag 존재하는지 확인
            question.getQuestionTagList()
                    .forEach(questionTag -> tagService.findTag(questionTag.getTag().getTagId()));
        }

    }

    private Question findVerifiedQuestionById(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question foundQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return foundQuestion;
    }

//    private Question findVerifiedQuestionByTitle(String questionTitle){
//        Optional<Question> optionalQuestion = questionRepository.findByQuestionTitle(questionTitle);
//        Question foundQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
//
//        return foundQuestion;
//    }

    private Question saveQuestion(Question question) {
        return questionRepository.saveAndFlush(question);
    }

    public Long getVoteCount(Long questionId){
        Question question = findVerifiedQuestionById(questionId);
        return question.getVoteCount();
    }

    public void setUpVote(Long questionId, Long userId) {

        userService.findUser(userId); //존재하는 user인지 유효성 검사

        Question question = findVerifiedQuestionById(questionId);
        VoteStatus status = getUserVoteStatus(question, userId);
        Long voteCnt = question.getVoteCount();

        if(status == VoteStatus.NO_VOTE){
            question.upVotedUserId.add(userId);
            voteCnt++;
        }else if(status == VoteStatus.DID_UP_VOTE){
            //이 경우 그냥 아무 로직도 하지 않기로
        }else if(status == VoteStatus.DID_DOWN_VOTE){
            question.downVotedUserId.remove(userId);
            voteCnt++;
        }

        question.updateVoteCount(voteCnt);
    }

    public void setDownVote(Long questionId, Long userId){

        userService.findUser(userId); //존재하는 user인지 유효성 검사

        Question question = findVerifiedQuestionById(questionId);
        VoteStatus status = getUserVoteStatus(question, userId);
        Long voteCnt = question.getVoteCount();
        if(status == VoteStatus.NO_VOTE){
            question.downVotedUserId.add(userId);
            voteCnt--;
        }else if(status == VoteStatus.DID_UP_VOTE){
            question.upVotedUserId.remove(userId);
            voteCnt--;
        }else if(status == VoteStatus.DID_DOWN_VOTE){
            //이 경우 그냥 아무 로직도 하지 않기로
        }

        question.updateVoteCount(voteCnt);
    }

    private VoteStatus getUserVoteStatus(Question question, Long userId){
        if (question.getUpVotedUserId().contains(userId)){
            return VoteStatus.DID_UP_VOTE;
        }else if(question.getDownVotedUserId().contains(userId)){
            return VoteStatus.DID_DOWN_VOTE;
        }else{
            return VoteStatus.NO_VOTE;
        }
    }


    public enum VoteStatus {
        DID_UP_VOTE(1, "did up vote"),
        NO_VOTE(2, "did no vote"),
        DID_DOWN_VOTE(3, "did down vote");

        @Getter
        private int status;

        @Getter
        private String message;

        VoteStatus(int code, String message) {
            this.status = code;
            this.message = message;
        }


    }




/*
    private final static String VIEWCOOKIENAME = "alreadyViewCookie";

    @Transactional
    public int updateView(Long questionId, HttpServletRequest request, HttpServletResponse response) {
        javax.servlet.http.Cookie[] cookies = request.getCookies();
        boolean checkCookie = false;
        int result = 0;
        if (cookies != null) {
            for (javax.servlet.http.Cookie cookie : cookies) {
                // 이미 조회를 한 경우 체크
                if (cookie.getName().equals(VIEWCOOKIENAME + questionId)) checkCookie = true;
            }
            if (!checkCookie) {
                Cookie newCookie = createCookieForForNotOverlap(questionId);
                response.addCookie(newCookie);
                result = QuestionRepository.updateView(questionId);
            }
        } else {
            Cookie newCookie = createCookieForForNotOverlap(questionId);
            response.addCookie(newCookie);
            result = QuestionRepository.updateView(questionId);
        }
        return result;
    }

        */
    /*
     * 조회수 중복 방지를 위한 쿠키 생성 메소드
     * @param cookie
     * @return
     * *//*

        private Cookie createCookieForForNotOverlap(Long questionId) {
            Cookie cookie = new Cookie(VIEWCOOKIENAME+questionId, String.valueOf(questionId));
            cookie.setComment("조회수 중복 증가 방지 쿠키");	    // 쿠키 용도 설명 기재
            cookie.setMaxAge(getRemainSecondForTomorrow()); 	    // 하루를 준다.
            cookie.setHttpOnly(true);				          // 서버에서만 조작 가능
            return cookie;
        }

        // 다음 날 정각까지 남은 시간(초)
        private int getRemainSecondForTomorrow() {
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime tomorrow = LocalDateTime.now().plusDays(1L).truncatedTo(ChronoUnit.DAYS);
            return (int) now.until(tomorrow, ChronoUnit.SECONDS);
    }
*/


}
