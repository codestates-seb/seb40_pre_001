package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import team001_be.stackoverflowCloneDemo.audit.Auditable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
public class QuestionPostDto extends Auditable {
    @NotNull
    private Long userId;

    @NotBlank
    @Length(min = 15, max= 100, message = "제목은 100자를 넘어갈 수 없습니다")
    private String questionTitle;

    @NotBlank
    @Length(min = 30, max = 65535, message = "질문 최대 글자 수를 초과하였습니다")
    private String context;

    private List<QuestionTagResponseDto> questionTagDtoList;

}
