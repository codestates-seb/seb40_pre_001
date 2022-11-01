package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

    private String userNickname;
    private String email;
//    private User.UserStatus userStatus;

//    public String getuserStatus() {
//        return userStatus.getStatus();
//    }

}