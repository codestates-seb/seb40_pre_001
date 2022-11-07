package team001_be.stackoverflowCloneDemo.acomment.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentPatchDto;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentPostDto;
import team001_be.stackoverflowCloneDemo.acomment.entity.AnswerComment;
import team001_be.stackoverflowCloneDemo.acomment.mapper.AnswerCommentMapper;
import team001_be.stackoverflowCloneDemo.acomment.service.AnswerCommentService;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@AllArgsConstructor
@Validated
@Slf4j
public class AnswerCommentController {

    private final AnswerCommentService answerCommentService;

    private final AnswerCommentMapper answerCommentMapper;

    @PostMapping("/comments")

    public ResponseEntity postAnswerComment(@Valid @RequestBody AnswerCommentPostDto answerCommentPostDto) {
        AnswerComment answerComment = answerCommentService.createAnswerComment(
                answerCommentMapper.answerCommentPostToComment(answerCommentPostDto), answerCommentPostDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerCommentMapper.answerCommentToCommentResponse(answerComment)), HttpStatus.CREATED);
    }

    @GetMapping("/comments/{answerComment-Id}")
    public ResponseEntity getAnswerComment(@PathVariable("answerComment-Id") @Positive Long answerCommentId) {
        AnswerComment answerComment = answerCommentService.findAnswerComment(answerCommentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerCommentMapper.answerCommentToCommentResponse(answerComment)), HttpStatus.OK);
    }

    @PatchMapping("/comments/edit/{answerComment-Id}")
    public ResponseEntity patchAnswerComment(@PathVariable("answerComment-Id") @Positive Long answerCommentId,
                                             @Valid @RequestBody AnswerCommentPatchDto answerCommentPatchDto){

        answerCommentPatchDto.setAnswerCommentId(answerCommentId);
        AnswerComment answerComment = answerCommentService.updateAnswerComment(
                answerCommentMapper.answerCommentPatchToComment(answerCommentPatchDto), answerCommentPatchDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerCommentMapper.answerCommentToCommentResponse(answerComment)), HttpStatus.OK);

    }
    @DeleteMapping("/comments/{answerComment-Id}")
    public ResponseEntity deleteAnswerComment(@PathVariable("answerComment-Id") @Positive Long answerCommentId,
                                              @Positive @RequestParam Long userId){

        answerCommentService.deleteAnswerComment(answerCommentId,userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
