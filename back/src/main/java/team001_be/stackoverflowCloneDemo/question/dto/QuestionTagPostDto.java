package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class QuestionTagPostDto {
    @Positive
    @NotNull
    private Long tagId;
}
