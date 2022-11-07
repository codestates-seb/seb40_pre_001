package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserStatsDto {

    public static UserStatsDto userStatsDto;

    private Long userId;
    private String email;

    private int questionCounts;
    private int answerCounts;
    private int totalViewCounts;
    private int reputation;

}


