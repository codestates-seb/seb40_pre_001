package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.*;
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

    public static UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setUserNickname(user.getUserNickname());
        userDto.setAddress(user.getAddress());
        userDto.setBirthday(user.getBirthday());
        return userDto;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long userId;
        private String email;
        private String userNickname;
    }
}


