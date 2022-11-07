package team001_be.stackoverflowCloneDemo.response;

import lombok.Builder;
import lombok.Getter;
import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserStatsDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.List;

@Getter
public class StatsResponseDto {
    private long userId;

    private int questionCounts;
    private int answerCounts;

    private int totalViewCounts;

    public StatsResponseDto(long userId, int questionCounts, int answerCounts, int totalViewCounts, int reputation) {
        this.userId = userId;
        this.questionCounts = questionCounts;
        this.answerCounts = answerCounts;
        this.totalViewCounts = totalViewCounts;
        this.reputation = reputation;
    }

    //total view counts from the question.
    private int reputation;





    }


