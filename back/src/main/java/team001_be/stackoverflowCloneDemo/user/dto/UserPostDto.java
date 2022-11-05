package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@NoArgsConstructor
public class UserPostDto {
    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Email
    private String email;
    
    @NotBlank(message = "닉네임은 공백일 수 없습니다.")
    private String userNickname;


    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,16}$",
            message = "비밀번호는 영문과 숫자 조합으로 8 ~ 16자리까지 가능합니다.")
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;

    public UserPostDto(String email, String password, String userNickname) {
        this.email = email;
        this.password = password;
        this.userNickname = userNickname;
    }
}
