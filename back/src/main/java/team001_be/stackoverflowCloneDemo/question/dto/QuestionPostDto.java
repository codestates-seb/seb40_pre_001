package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
public class QuestionPostDto {
    @NotNull
    private Long userId;

    @NotBlank
    @Length(min = 15, max= 100, message = "제목은 100자를 넘어갈 수 없습니다")
    private String questionTitle;

    @NotBlank
    @Length(min = 30, max = 65535, message = "질문은 최소 30자를 입력하여야 합니다")
    private String context;

    private List<QuestionTagResponseDto> questionTagDtoList;

}
