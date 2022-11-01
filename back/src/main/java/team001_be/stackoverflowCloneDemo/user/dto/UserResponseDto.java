package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

    private Long userId;
    private String email;
    private String userNickname;
    private String description;
    private String address;
    private LocalDate birthday;

}
