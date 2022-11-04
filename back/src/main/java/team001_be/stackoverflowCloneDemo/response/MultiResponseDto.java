package team001_be.stackoverflowCloneDemo.response;

import lombok.Builder;
import lombok.Getter;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;

import java.util.List;

@Getter
public class MultiResponseDto {
    private QuestionSimpleResponseDto question;
    private List<AnswerResponseDto> answers;

    @Builder
    public MultiResponseDto(QuestionSimpleResponseDto question, List<AnswerResponseDto> answers) {
        this.question = question;
        this.answers = answers;
    }


//    private PageInfo pageInfo;
//
//    public MultiResponseDto(List<T> data) {
//        this.data = data;
//        this.pageInfo = new PageInfo(page.getNumber() + 1,
//                page.getSize(), page.getTotalElements(), page.getTotalPages());
//    }
}
