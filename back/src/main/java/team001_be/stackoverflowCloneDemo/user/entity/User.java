package team001_be.stackoverflowCloneDemo.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Column(name = "\"userNickname\"", unique = true)
    public String userNickname;

    @Column(name = "description")
    public String description;

    @Column(name = "address")
    public String address;

    @Column(name = "birthday")
    private LocalDate birthday;

    public static <UserDto, UserEntity> UserEntity toSavEntity(UserDto userDto){
        UserEntity userEntity = new UserEntity();
        User.setEmail(User.getEmail());

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
