package team001_be.stackoverflowCloneDemo.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "\"User\"")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private UserStatus userStatus = UserStatus.USER_EXIST;

    @Column(name = "email", nullable = false, updatable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false, updatable = false)
    private String password;

    @Column(name = "\"userNickname\"")
    public String userNickname;

    @Column(name = "description")
    public String description;

    @Column(name = "address")
    public String address;

    @Column(name = "birthday")
    private LocalDate birthday;


    // id 가 없기 때문에, update 쿼리가 아니라 , insert 쿼리 가 나감.
    public static User toSaveEntity(UserDto userDto){
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUserNickname(userDto.getUserNickname());
        user.setBirthday(userDto.getBirthday());
        user.setAddress(userDto.getAddress());
        return user;
    }

    //user Id 가 포함되었기 떄문에 update 쿼리가 나감.
    public static User toUpdateEntity(UserDto userDto){
        User user = new User();
        user.setUserId(userDto.getUserId());
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

    //password를 해싱해서 저장한다.
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        User user = (User) o;
        return userId == (user.userId) &&
                userNickname.equals(user.userNickname) &&
                email.equals(user.email) &&
                password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userNickname, email, password);
    }
}
