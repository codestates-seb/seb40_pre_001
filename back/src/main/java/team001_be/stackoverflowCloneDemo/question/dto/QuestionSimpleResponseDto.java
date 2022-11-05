package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;
import team001_be.stackoverflowCloneDemo.tag.dto.TagSimpleResponseDto;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionSimpleResponseDto {
    private Long questionId;
    private Long userId;
    private String questionTitle;
    private String context;
    private int viewCount;
    private int voteCount;
    private List<TagSimpleResponseDto> TagList;
    private boolean hasAccepted;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
