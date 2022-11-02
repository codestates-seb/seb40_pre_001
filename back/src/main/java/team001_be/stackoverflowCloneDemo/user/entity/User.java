package team001_be.stackoverflowCloneDemo.user.entity;

import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.audit.Auditable;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "\"User\"")
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false, updatable = false)
    private String password;

    @Column(name = "\"userNickname\"")
    public String userNickname;

    @Column(name = "description")
    public String description;

    @Column(name = "address")
    public String address;

    @Column(name = "birthday")
    private LocalDate birthday;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
 
    public User(String email, String userNickname, String description, String address, LocalDate birthday) {
        this.email = email;
        this.userNickname = userNickname;
        this.description = description;
        this.address = address;
        this.birthday = birthday;
    }

//     id 가 없기 때문에, update 쿼리가 아니라 , insert 쿼리 가 나감.
    public static User toSaveEntity(UserDto userDto){
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUserNickname(userDto.getUserNickname());
        user.setBirthday(userDto.getBirthday());
        user.setAddress(userDto.getAddress());
        return user;
    }
  
    public enum UserStatus {
        USER_EXIST("이미 가입한 회원"),
        USER_NOT_EXIST("가입하지 않은 회원");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
