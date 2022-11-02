package team001_be.stackoverflowCloneDemo.question.service;

import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.repository.QuestionRepository;
import team001_be.stackoverflowCloneDemo.tag.service.TagService;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.transaction.Transactional;
import java.util.Objects;
import java.util.Optional;


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

    public Question createQuestion(Question question, Long userId){
        question.setUser(userService.findUser(userId));
        verifyQuestion(question); //존재하는 회원, tag인지 check

        return saveQuestion(question);
    }

    public Question findQuestion(Long questionId){
        return findVerifiedQuestionById(questionId);
    }

    public void updateQuestionViewCount(Question question, Long viewCount){
        Question foundQuestion = findQuestion(question.getQuestionId());

        question.updateViewCount(viewCount);
        saveQuestion(question);
    }

    public Question updateQuestion(Question question, Long userId){
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

    public void deleteQuestion(Long questionId, Long userId){
        Question question = findVerifiedQuestionById(questionId);
        userService.verifyUserAuthorization(question.getUser().getUserId(), userId);

        questionRepository.delete(question);
    }

    private void verifyQuestion(Question question){
        //회원이 존재하는지 확인, @Transactional이기에 runtime exception발생시 자동 롤백됨
        userService.findUser(question.getUser().getUserId());

        //Tag 존재하는지 확인
        question.getQuestionTagList()
                .forEach(questionTag -> tagService.findTag(questionTag.getTag().getTagId()));
    }

    private Question findVerifiedQuestionById(Long questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question foundQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return foundQuestion;
    }

    private Question findVerifiedQuestionByTitle(String questionTitle){
        Optional<Question> optionalQuestion = questionRepository.findByQuestionTitle(questionTitle);
        Question foundQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return foundQuestion;
    }




    private Question saveQuestion(Question question){
        return questionRepository.saveAndFlush(question);
    }
}
