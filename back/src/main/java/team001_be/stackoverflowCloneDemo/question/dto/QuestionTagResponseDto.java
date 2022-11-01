package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Getter
@Setter
public class QuestionTagResponseDto {
    @Positive
    private Long tagId;


}
