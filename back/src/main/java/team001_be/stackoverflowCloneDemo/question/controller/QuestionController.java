package team001_be.stackoverflowCloneDemo.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.mapper.QuestionMapper;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto), questionPostDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto), questionPatchDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
    }


    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId,
                                         @Positive @RequestParam Long userId){
        questionService.deleteQuestion(questionId, userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
