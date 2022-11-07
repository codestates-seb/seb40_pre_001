package team001_be.stackoverflowCloneDemo.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPatchDto {
    private Long userId;

    private String email;

    private String password;

    private String description;

    private String userNickname;

    private LocalDate birthday;

    private String address;
}

