package team001_be.stackoverflowCloneDemo.question.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T03:28:10+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionTitle( questionPostDto.getQuestionTitle() );
        question.context( questionPostDto.getContext() );

        return question.build();
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( questionPatchDto.getQuestionId() );
        question.questionTitle( questionPatchDto.getQuestionTitle() );
        question.context( questionPatchDto.getContext() );

        return question.build();
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionResponseDto.setContext( question.getContext() );
        if ( question.getViewCount() != null ) {
            questionResponseDto.setViewCount( question.getViewCount().intValue() );
        }
        if ( question.getVoteCount() != null ) {
            questionResponseDto.setVoteCount( question.getVoteCount().intValue() );
        }
        List<QuestionTag> list = question.getQuestionTagList();
        if ( list != null ) {
            questionResponseDto.setQuestionTagList( new ArrayList<QuestionTag>( list ) );
        }
        questionResponseDto.setHasAccepted( question.isHasAccepted() );

        return questionResponseDto;
    }
}
