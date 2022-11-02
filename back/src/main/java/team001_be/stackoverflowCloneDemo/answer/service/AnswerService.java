package team001_be.stackoverflowCloneDemo.answer.service;

import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.answer.repository.AnswerRepository;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.transaction.Transactional;

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
        answer.setQuestion(questionService.findQuestion(questionId));
        answer.setUser(userService.findUser(answer.getQuestion().getUser().getUserId()));

        return saveAnswer(answer);
    }

    private Answer saveAnswer(Answer answer){
        return answerRepository.save(answer);
    }
}
