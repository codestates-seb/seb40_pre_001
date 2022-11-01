package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
public class QuestionPatchDto {
    private Long userId;
    private Long questionId;

    @Length( max= 100, message = "제목은 100자를 넘어갈 수 없습니다")
    private String questionTitle;

    @Length( max = 65535, message = "질문 최대 글자 수를 초과하였습니다")
    private String context;

    private List<QuestionTagResponseDto> questionTagDtoList;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
