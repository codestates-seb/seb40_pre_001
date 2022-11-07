package team001_be.stackoverflowCloneDemo.answer.service;

import lombok.Getter;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.answer.repository.AnswerRepository;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserService userService;
    private final QuestionService questionService;


    public AnswerService(AnswerRepository answerRepository, UserService userService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.userService = userService;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer, Long questionId){
        //해당 userId 존재하는지 검증
        User user = userService.findUser(answer.getUser().getUserId());
        //answer 생성
        answer.setQuestion(questionService.findQuestion(questionId));
        answer.setUser(user);

        return saveAnswer(answer);
    }

    private Answer saveAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public void deleteAnswer(Long answerId, Long userId) {
        Answer answer = findAnswer(answerId);
        userService.verifyUserAuthorization(answer.getUser().getUserId() , userId );

        answerRepository.delete(answer);
    }

    public Answer findAnswer(Long answerId){
        Optional<Answer> answer = answerRepository.findById(answerId);
        if(answer.isEmpty()){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
        return answer.get();
    }

    public Answer updateAnswer(Answer answer, Long userId){
        Answer foundAnswer = findAnswer(answer.getAnswerId());

        userService.verifyUserAuthorization(userId, foundAnswer.getUser().getUserId());

        Optional.ofNullable(answer.getContext())
                .ifPresent(foundAnswer::setContext);

        return saveAnswer(foundAnswer);
    }

    public void setUpVote(Long answerId, Long userId) {

        userService.findUser(userId); //존재하는 user인지 유효성 검사

        Answer answer = findAnswer(answerId);
        VoteStatus status = getUserVoteStatus(answer, userId);
        Long voteCnt = answer.getVoteCount();

        if(status == VoteStatus.NO_VOTE){
            answer.upVotedUserId.add(userId);
            voteCnt++;
        }else if(status == VoteStatus.DID_UP_VOTE){
            //이 경우 그냥 아무 로직도 하지 않기로
        }else if(status == VoteStatus.DID_DOWN_VOTE){
            answer.downVotedUserId.remove(userId);
            voteCnt++;
        }

        answer.updateVoteCount(voteCnt);
    }

    public void setDownVote(Long answerId, Long userId){

        userService.findUser(userId); //존재하는 user인지 검사

        Answer answer = findAnswer(answerId);
        VoteStatus status = getUserVoteStatus(answer, userId);
        Long voteCnt = answer.getVoteCount();

        if(status == VoteStatus.NO_VOTE){
            answer.downVotedUserId.add(userId);
            voteCnt--;
        }else if(status == VoteStatus.DID_UP_VOTE){
            answer.upVotedUserId.remove(userId);
            voteCnt--;
        }else if(status == VoteStatus.DID_DOWN_VOTE){
            //이 경우 그냥 아무 로직도 하지 않기로
        }

        answer.updateVoteCount(voteCnt);
    }

    private VoteStatus getUserVoteStatus(Answer answer, Long userId){
        if (answer.getUpVotedUserId().contains(userId)){
            return VoteStatus.DID_UP_VOTE;
        }else if(answer.getDownVotedUserId().contains(userId)){
            return VoteStatus.DID_DOWN_VOTE;
        }else{
            return VoteStatus.NO_VOTE;
        }
    }

    public Long getVoteCount(Long answerId) {
        return findAnswer(answerId).getVoteCount();
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
}
