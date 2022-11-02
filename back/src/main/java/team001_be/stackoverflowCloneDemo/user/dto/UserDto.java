package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.*;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private static UserDto userDto;

    private Long userId;
    private String email;
    private String password;

    private String userNickname;

    private String description;

    private LocalDate birthday;

    private String address;

}


