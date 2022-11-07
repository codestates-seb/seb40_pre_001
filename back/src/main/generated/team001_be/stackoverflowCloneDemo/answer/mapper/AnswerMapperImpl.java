package team001_be.stackoverflowCloneDemo.answer.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T23:32:19+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public List<AnswerResponseDto> answerToAnswerResponseDtos(List<Answer> answerList) {
        if ( answerList == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answerList.size() );
        for ( Answer answer : answerList ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }
}
