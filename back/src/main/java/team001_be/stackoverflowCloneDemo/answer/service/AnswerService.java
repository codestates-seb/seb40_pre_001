package team001_be.stackoverflowCloneDemo.answer.service;

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

    private Answer findAnswer(Long answerId){
        Optional<Answer> answer = answerRepository.findById(answerId);
        if(answer.isEmpty()){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
        return answer.get();
    }


}
