package team001_be.stackoverflowCloneDemo.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.question.entity.Question;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionCommentPatchDto {
    @Positive
    private Long userId;

    private Long questionCommentId;

    private Long questionId;

    private String questionCommentContent;

    private String questionCommentUsername;

}
