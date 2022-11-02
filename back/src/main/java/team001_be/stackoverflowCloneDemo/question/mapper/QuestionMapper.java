package team001_be.stackoverflowCloneDemo.question.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionResponseDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setUserId(question.getUser().getUserId());
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
