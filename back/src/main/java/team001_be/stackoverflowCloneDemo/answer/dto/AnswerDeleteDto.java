package team001_be.stackoverflowCloneDemo.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class AnswerDeleteDto {
    @NotNull
    private Long userId;
    @NotNull
    private Long answerId;
}
