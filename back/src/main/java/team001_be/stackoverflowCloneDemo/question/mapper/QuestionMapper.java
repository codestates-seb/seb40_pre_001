package team001_be.stackoverflowCloneDemo.question.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    default QuestionSimpleResponseDto questionToQuestionSimpleResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionSimpleResponseDto questionSimpleResponseDto = new QuestionSimpleResponseDto();

        questionSimpleResponseDto.setQuestionId( question.getQuestionId() );
        questionSimpleResponseDto.setUserId(question.getUser().getUserId());
        questionSimpleResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionSimpleResponseDto.setContext( question.getContext() );
        if ( question.getViewCount() != null ) {
            questionSimpleResponseDto.setViewCount( question.getViewCount().intValue() );
        }
        if ( question.getVoteCount() != null ) {
            questionSimpleResponseDto.setVoteCount( question.getVoteCount().intValue() );
        }
        List<QuestionTag> list = question.getQuestionTagList();
        if ( list != null && !list.isEmpty() ) {
            questionSimpleResponseDto.setQuestionTagList( new ArrayList<QuestionTag>( list ) );
        }
        questionSimpleResponseDto.setHasAccepted( question.isHasAccepted() );
        questionSimpleResponseDto.setCreatedAt(question.getCreatedAt());
        questionSimpleResponseDto.setModifiedAt(question.getModifiedAt());

        return questionSimpleResponseDto;
    }
}
