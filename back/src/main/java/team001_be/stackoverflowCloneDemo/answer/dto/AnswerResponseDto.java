package team001_be.stackoverflowCloneDemo.answer.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AnswerResponseDto {
    private Long answerId;
    private Long questionId;
    private Long userId;
    private String context;
    private int voteCount;
    private boolean isAccepted;
}
