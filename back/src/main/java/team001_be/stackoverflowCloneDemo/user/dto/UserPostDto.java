package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@NoArgsConstructor
public class UserPostDto {
    public UserPostDto(String email, String userNickname, String password) {
        this.email = email;
        this.userNickname = userNickname;
        this.password = password;

    }

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    @Email
    private String email;
    
    @NotBlank(message = "닉네임은 공백일 수 없습니다.")
    private String userNickname;
  
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,16}$",
            message = "비밀번호는 영문과 숫자 조합으로 8 ~ 16자리까지 가능합니다.")
    private String password;
    /*private boolean active = true;*/


}
