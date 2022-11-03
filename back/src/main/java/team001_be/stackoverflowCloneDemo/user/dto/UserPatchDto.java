package team001_be.stackoverflowCloneDemo.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPatchDto extends Auditable {
    private Long userId;

    private String userNickname;

    private String address;

    private String description;

    private LocalDate birthday;
    /*private boolean active = true;*/

}

