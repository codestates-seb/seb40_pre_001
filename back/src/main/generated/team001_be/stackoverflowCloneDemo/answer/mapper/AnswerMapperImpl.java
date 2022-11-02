package team001_be.stackoverflowCloneDemo.answer.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPatchDto;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPostDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T13:12:44+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer.AnswerBuilder answer = Answer.builder();

        answer.context( answerPostDto.getContext() );

        return answer.build();
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer.AnswerBuilder answer = Answer.builder();

        answer.context( answerPatchDto.getContext() );

        return answer.build();
    }
}
