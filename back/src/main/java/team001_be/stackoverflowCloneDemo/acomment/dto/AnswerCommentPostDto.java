package team001_be.stackoverflowCloneDemo.acomment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class AnswerCommentPostDto {

    @NotNull
    private Long userId;

    @NotNull
    private Long answerId;

    @NotNull
    @Length(min = 15, max = 65535, message = "댓글은 최소 15자를 입력하여야 합니다")
    private String answerCommentContent;

    public AnswerCommentPostDto(Long userId, Long answerId, String answerCommentContent) {
        this.userId = userId;
        this.answerId = answerId;
        this.answerCommentContent = answerCommentContent;
    }
}