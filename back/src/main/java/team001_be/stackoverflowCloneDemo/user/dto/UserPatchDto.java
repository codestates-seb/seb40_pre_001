package team001_be.stackoverflowCloneDemo.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPatchDto {
    private long userId;

    private String id;

    private String password;

    private String name;

    private String phone;
}

