package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPatchDto {
    @NotBlank
    @Length(max= 100, message = "제목은 100자를 넘어갈 수 없습니다")
    private String questionTitle;

    @NotBlank
    @Length(max = 65535, message = "질문 최대 글자 수를 초과하였습니다")
    private String context;

    private List<QuestionTagDto> questionTagDtoList;
}
