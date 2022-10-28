package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPostDto {
    @NotBlank
    private int userId;

    @NotBlank
    @Length(max= 100 )
    private String questionTitle;

    @NotBlank
    @Length(max = 65535)
    private String context;


}
