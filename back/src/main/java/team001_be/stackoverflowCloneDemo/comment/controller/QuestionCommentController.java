package team001_be.stackoverflowCloneDemo.comment.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.comment.dto.QuestionCommentPatchDto;
import team001_be.stackoverflowCloneDemo.comment.dto.QuestionCommentPostDto;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.comment.mapper.QuestionCommentMapper;
import team001_be.stackoverflowCloneDemo.comment.service.QuestionCommentService;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/comments")
@AllArgsConstructor
@Validated
@Slf4j
public class QuestionCommentController {

    private final QuestionCommentService questionCommentService;

    private final QuestionCommentMapper questionCommentMapper;


    @PostMapping("/question")
    public ResponseEntity postQuestionComment(@Valid @RequestBody QuestionCommentPostDto questionCommentPostDto) {
        QuestionComment questionComment = questionCommentService.createQuestionComment(
                questionCommentMapper.questionCommentPostToComment(questionCommentPostDto), questionCommentPostDto.getUserId());

        return new ResponseEntity<>(new SingleResponseDto<>(questionCommentMapper.questionCommentToCommentResponse(questionComment)), HttpStatus.CREATED);
//        QuestionComment questionComment = questionCommentMapper.questionCommentPostToComment(questionCommentPostDto);
//        QuestionComment createdQuestionComment = questionCommentService.createQuestionComment(questionComment, questionCommentPostDto.getUserId());
//
//        QuestionCommentResponseDto response = questionCommentMapper.questionCommentToCommentResponse(createdQuestionComment);
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @GetMapping("/question/{questionComment-Id}")
    public ResponseEntity getQuestionComment(@PathVariable("questionComment-Id") @Positive Long questionCommentId) {
        QuestionComment questionComment = questionCommentService.findQuestionComment(questionCommentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionCommentMapper.questionCommentToCommentResponse(questionComment)), HttpStatus.OK);
    }

    @PatchMapping("/question/edit/{questionComment-Id}")
    public ResponseEntity patchQuestionComment(@PathVariable("questionComment-Id") @Positive Long questionCommentId,
                                               @Valid @RequestBody QuestionCommentPatchDto questionCommentPatchDto) {
        questionCommentPatchDto.setQuestionCommentId(questionCommentId);
        QuestionComment questionComment = questionCommentService.updateQuestionComment(questionCommentMapper.questionCommentPatchToComment(questionCommentPatchDto), questionCommentPatchDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionCommentMapper.questionCommentToCommentResponse(questionComment)), HttpStatus.OK);
    }

    @DeleteMapping("/question/{questionComment-Id}")
    public ResponseEntity deleteQuestionComment(@PathVariable("questionComment-Id") @Positive Long questionCommentId,
                                                @Positive @RequestParam Long userId){
        questionCommentService.deleteQuestionComment(questionCommentId,userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
