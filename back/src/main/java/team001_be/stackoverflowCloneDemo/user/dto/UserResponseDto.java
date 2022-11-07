package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

    private Long userId;
    private String email;
    private String userNickname;
    private String description;
    private String address;
    private LocalDate birthday;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
