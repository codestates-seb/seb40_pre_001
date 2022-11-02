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
public class UserDto {

    public static UserDto userDto;

    private Long userId;
    private String email;
    private String password;

    public String userNickname;

    private LocalDate birthday;

    public String address;

    private User.UserStatus userStatus;

}


