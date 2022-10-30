package team001_be.stackoverflowCloneDemo.user.dto;

// DTO Data Transfer Object.

import lombok.Data;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.time.LocalDate;

@Data
public class UserDto {

    private Long userId;
    private String email;
    private String password;

    public String userNickname;

    private LocalDate birthday;

    public String address;

    private User.UserStatus userStatus;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public static UserDto toUserDto{User user}{
        UserDto user = new UserDto();
        user.setUserId(user.getUserId());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setUserNickname(user.getUserNickname());
        user.setAddress(user.getAddress());
        user.setBirthday(user.getBirthday());
        user.setUserStatus(user.setUserStatus(););
    }
}


