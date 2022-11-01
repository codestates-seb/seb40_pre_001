package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Getter
@NoArgsConstructor
public class UserPostDto {

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Email
    private String email;
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;
    @NotBlank(message = "닉네임은 공백일 수 없습니다.")
    private String userNickname;

    public UserPostDto(String email, String password, String userNickname) {
        this.email = email;
        this.password = password;
        this.userNickname = userNickname;
    }
}
