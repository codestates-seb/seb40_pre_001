package team001_be.stackoverflowCloneDemo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto extends Auditable {

    private Long userId;
    private String email;
    private String userNickname;
    private String description;
    private String address;
    private LocalDate birthday;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private User.UserStatus userStatus = User.UserStatus.USER_EXIST;

}
