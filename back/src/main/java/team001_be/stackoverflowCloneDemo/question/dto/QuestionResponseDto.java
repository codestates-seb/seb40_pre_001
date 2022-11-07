package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.tag.dto.TagSimplePostDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private Long userId;
    private String questionTitle;
    private String context;
    private int viewCount;
    private int voteCount;
    private List<TagSimplePostDto> TagList;
    private List<Answer> answerList;
    private List<QuestionComment> questionCommentList;
    private boolean hasAccepted;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
