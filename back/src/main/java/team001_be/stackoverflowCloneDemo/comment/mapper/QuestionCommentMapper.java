package team001_be.stackoverflowCloneDemo.comment.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import team001_be.stackoverflowCloneDemo.comment.dto.QuestionCommentPatchDto;
import team001_be.stackoverflowCloneDemo.comment.dto.QuestionCommentPostDto;
import team001_be.stackoverflowCloneDemo.comment.dto.QuestionCommentResponseDto;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.sql.Timestamp;
import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionCommentMapper {

    List<QuestionCommentResponseDto> questionCommentToCommentResponseDtos(List<QuestionComment> questionCommentList);

    default QuestionComment questionCommentPostToComment(QuestionCommentPostDto questionCommentPostDto) {
        if (questionCommentPostDto == null) {
            return null;
        }
        User user = new User();
        user.setUserId(questionCommentPostDto.getUserId());

        Question question = new Question();
        question.setQuestionId(questionCommentPostDto.getQuestionId());


        QuestionComment questionComment = new QuestionComment();
        questionComment.setUser(user);
        questionComment.setQuestion(question);
        questionComment.setQuestionCommentContent(questionCommentPostDto.getQuestionCommentContent());

        return questionComment;
    }

    default QuestionComment questionCommentPatchToComment(QuestionCommentPatchDto questionCommentPatchDto) {
        if (questionCommentPatchDto == null) {
            return null;
        }
        User user = new User();
        user.setUserId(questionCommentPatchDto.getUserId());

        Question question = new Question();
        question.setQuestionId(questionCommentPatchDto.getQuestionId());

        QuestionComment questionComment = new QuestionComment();
        questionComment.setUser(user);
        questionComment.setQuestion(question);
        questionComment.setQuestionCommentId(questionCommentPatchDto.getQuestionCommentId());
        questionComment.setQuestionCommentContent(questionCommentPatchDto.getQuestionCommentContent());
        questionComment.setQuestionCommentUsername(questionCommentPatchDto.getQuestionCommentUsername());

        return questionComment;
    }

    default QuestionCommentResponseDto questionCommentToCommentResponse(QuestionComment questionComment) {
        if (questionComment == null) {
            return null;
        }

        User user = new User();
        user.setUserId(questionComment.getUser().getUserId());

//      QuestionComment questionComment = new QuestionComment();
        questionComment.setQuestionCommentId(questionComment.getQuestionCommentId());

        Question question = new Question();
        question.setQuestionId(questionComment.getQuestion().getQuestionId());

        QuestionCommentResponseDto questionCommentResponseDto = new QuestionCommentResponseDto();
        questionCommentResponseDto.setUserId(user.getUserId());
        questionCommentResponseDto.setQuestionCommentId(questionComment.getQuestionCommentId());
        questionCommentResponseDto.setQuestionId(question.getQuestionId());
        questionCommentResponseDto.setQuestionCommentContent(questionComment.getQuestionCommentContent());
        questionCommentResponseDto.setQuestionCommentUsername(questionComment.getQuestionCommentUsername());
        questionCommentResponseDto.setCreatedAt(Timestamp.valueOf(questionComment.getCreatedAt()));
        questionCommentResponseDto.setModifiedAt(Timestamp.valueOf(questionComment.getModifiedAt()));


        return questionCommentResponseDto;
    }
}

