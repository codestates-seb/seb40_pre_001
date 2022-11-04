package team001_be.stackoverflowCloneDemo.answer.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class AnswerPatchDto {

    private Long userId;
    private Long answerId;
    @NotBlank
    @Length(min = 30, max = 65535, message = "대답은 최소 30자를 입력하여야 합니다 ")
    private String context;

    public AnswerPatchDto(Long userId, Long answerId, String context) {
        this.userId = userId;
        this.answerId = answerId;
        this.context = context;
    }
}
