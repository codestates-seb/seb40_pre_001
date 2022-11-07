package team001_be.stackoverflowCloneDemo.acomment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
@Setter
public class AnswerCommentPatchDto {
    @Positive
    private Long userId;

    private Long answerCommentId;

    private Long answerId;

    private String answerCommentContent;

    private String answerCommentUsername;
}