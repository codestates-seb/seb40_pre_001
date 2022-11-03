package team001_be.stackoverflowCloneDemo.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class QuestionCommentPostDto {
    @NotNull
    private Long userId;
    @NotNull
    private Long questionId;
    @NotNull
    @Length(min = 15, max = 65535, message = "질문은 최소 30자를 입력하여야 합니다")
    private String questionCommentContent;


    public QuestionCommentPostDto(Long userId, Long questionId, String questionCommentContent) {
        this.userId = userId;
        this.questionId = questionId;
        this.questionCommentContent = questionCommentContent;
    }
}
