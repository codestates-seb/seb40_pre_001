package team001_be.stackoverflowCloneDemo.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPatchDto {
    private Long userId;

    private String email;

    private String password;

    private String userNickname;

    private LocalDate birthday;

    private String address;
}

