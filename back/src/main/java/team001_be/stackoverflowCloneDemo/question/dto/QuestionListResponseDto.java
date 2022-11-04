package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.question.entity.Question;

import java.util.List;

@Getter
@Setter
public class QuestionListResponseDto {
    private List<Question> questionList;
}
