package team001_be.stackoverflowCloneDemo.answer.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPatchDto;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPostDto;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto.AnswerResponseDtoBuilder answerResponseDto = AnswerResponseDto.builder();
        answerResponseDto.userId(answer.getUser().getUserId());
        answerResponseDto.questionId(answer.getQuestion().getQuestionId());
        answerResponseDto.answerId( answer.getAnswerId() );
        answerResponseDto.context( answer.getContext() );
        answerResponseDto.voteCount( answer.getVoteCount() );

        return answerResponseDto.build();
    }
}
