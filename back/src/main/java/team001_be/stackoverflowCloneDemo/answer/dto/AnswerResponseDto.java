package team001_be.stackoverflowCloneDemo.answer.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class AnswerResponseDto {
    private Long answerId;
    private Long questionId;
    private Long userId;
    private String context;
    private Long voteCount;
    private boolean isAccepted;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
