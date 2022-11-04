package team001_be.stackoverflowCloneDemo.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
public class QuestionCommentResponseDto {
    private Long userId;
    private Long questionId;
    private Long questionCommentId;
    private String questionCommentContent;
    private String questionCommentUsername;
    private Timestamp createdAt;
    private Timestamp modifiedAt;

}
