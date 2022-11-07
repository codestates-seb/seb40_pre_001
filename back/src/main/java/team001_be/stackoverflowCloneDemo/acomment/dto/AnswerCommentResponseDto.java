package team001_be.stackoverflowCloneDemo.acomment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
public class AnswerCommentResponseDto {
    private Long userId;
    private Long answerId;
    private Long answerCommentId;
    private String answerCommentContent;
    private String answerCommentUsername;
    private Timestamp createdAt;
    private Timestamp modifiedAt;
}