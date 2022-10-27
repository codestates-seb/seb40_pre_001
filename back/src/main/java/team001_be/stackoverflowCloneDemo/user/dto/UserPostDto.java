package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Email
    private String email;
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;
}
