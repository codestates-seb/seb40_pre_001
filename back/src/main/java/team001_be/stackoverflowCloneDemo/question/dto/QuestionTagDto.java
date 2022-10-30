package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class QuestionTagDto {
    @Positive
    private int tagId;


}
