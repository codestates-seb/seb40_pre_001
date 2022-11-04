package team001_be.stackoverflowCloneDemo.answer.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPatchDto;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerPostDto;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    List<AnswerResponseDto> answerToAnswerResponseDtos(List<Answer> answerList);

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }
        User user = new User();
        user.setUserId(answerPostDto.getUserId());

        Answer.AnswerBuilder answer = Answer.builder();
        answer.user(user);
        answer.context( answerPostDto.getContext() );

        return answer.build();
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }
        User user = new User();
        user.setUserId(answerPatchDto.getUserId());

        Answer.AnswerBuilder answer = Answer.builder();
        answer.user(user);
        answer.context( answerPatchDto.getContext());

        return answer.build();
    }

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
        answerResponseDto.createdAt(answer.getCreatedAt());
        answerResponseDto.modifiedAt(answer.getModifiedAt());

        return answerResponseDto.build();
    }
}
