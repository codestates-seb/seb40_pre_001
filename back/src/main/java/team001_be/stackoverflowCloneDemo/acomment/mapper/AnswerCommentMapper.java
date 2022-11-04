package team001_be.stackoverflowCloneDemo.acomment.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentPatchDto;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentPostDto;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentResponseDto;
import team001_be.stackoverflowCloneDemo.acomment.entity.AnswerComment;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.sql.Timestamp;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper {

    default AnswerComment answerCommentPostToComment(AnswerCommentPostDto answerCommentPostDto){
        if (answerCommentPostDto == null){
            return null;
        }

        User user = new User();
        user.setUserId(answerCommentPostDto.getUserId());

        Answer answer = new Answer();
        answer.setAnswerId(answerCommentPostDto.getAnswerId());

        AnswerComment answerComment = new AnswerComment();
        answerComment.setUser(user);
        answerComment.setAnswer(answer);
        answerComment.setAnswerCommentContent(answerCommentPostDto.getAnswerCommentContent());

        return answerComment;
    }

    default AnswerComment answerCommentPatchToComment(AnswerCommentPatchDto answerCommentPatchDto){
        if (answerCommentPatchDto == null){
            return null;
        }
        User user = new User();
        user.setUserId(answerCommentPatchDto.getUserId());

        Answer answer = new Answer();
        answer.setAnswerId(answerCommentPatchDto.getAnswerId());

        AnswerComment answerComment = new AnswerComment();
        answerComment.setUser(user);
        answerComment.setAnswer(answer);
        answerComment.setAnswerCommentId(answerCommentPatchDto.getAnswerCommentId());
        answerComment.setAnswerCommentContent(answerCommentPatchDto.getAnswerCommentContent());
        answerComment.setAnswerCommentUsername(answerCommentPatchDto.getAnswerCommentUsername());

        return answerComment;
    }

    default AnswerCommentResponseDto answerCommentToCommentResponse(AnswerComment answerComment){
        if (answerComment == null){
            return null;
        }
        User user = new User();
        user.setUserId(answerComment.getUser().getUserId());

        answerComment.setAnswerCommentId(answerComment.getAnswerCommentId());

        Answer answer = new Answer();
        answer.setAnswerId(answerComment.getAnswer().getAnswerId());

        AnswerCommentResponseDto answerCommentResponseDto = new AnswerCommentResponseDto();
        answerCommentResponseDto.setUserId(user.getUserId());
        answerCommentResponseDto.setAnswerCommentId(answerComment.getAnswerCommentId());
        answerCommentResponseDto.setAnswerId(answer.getAnswerId());
        answerCommentResponseDto.setAnswerCommentContent(answerComment.getAnswerCommentContent());
        answerCommentResponseDto.setAnswerCommentUsername(answerComment.getAnswerCommentUsername());
        answerCommentResponseDto.setCreatedAt(Timestamp.valueOf(answerComment.getCreatedAt()));
        answerCommentResponseDto.setModifiedAt(Timestamp.valueOf(answerComment.getModifiedAt()));

        return answerCommentResponseDto;

    }
}