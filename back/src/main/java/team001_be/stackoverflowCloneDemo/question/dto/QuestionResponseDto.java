package team001_be.stackoverflowCloneDemo.question.dto;

import lombok.Getter;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;

import java.sql.Timestamp;
import java.util.List;

@Getter
public class QuestionResponseDto {
    private Long questionId;
    private String userNickName;
    private String questionTitle;
    private String context;
    private int viewCount;
    private int voteCount;
    private List<QuestionTag> questionTagList;
    private boolean hasAccepted;
    private Timestamp dateCreated;
    private Timestamp dateModified;
}
