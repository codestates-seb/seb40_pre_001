package team001_be.stackoverflowCloneDemo.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPostDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.answer.mapper.AnswerMapper;
import team001_be.stackoverflowCloneDemo.answer.service.AnswerService;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.response.MultiResponseDto;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper, QuestionService questionService) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.questionService = questionService;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive Long questionId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto){

        //answer 생성
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        answer = answerService.createAnswer(answer, questionId);
        Question question = questionService.findQuestion(questionId);
        question.addAnswerList(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer)),
                HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}/all-answers")
    public ResponseEntity getAnswerByQuestionID(@PathVariable("question-id") @Positive Long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDtos(question.getAnswerList()))
                , HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") @Positive Long questionId,
                                       @PathVariable("answer-id") @Positive Long answerId,
                                       @RequestParam @Positive Long userId){

        answerService.deleteAnswer(answerId, userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
