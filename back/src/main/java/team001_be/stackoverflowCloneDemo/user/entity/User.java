package team001_be.stackoverflowCloneDemo.user.entity;

import lombok.*;
import team001_be.stackoverflowCloneDemo.audit.Auditable;

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

    @Column(name = "\"userNickname\"", unique = true)
    public String userNickname;

    @Column(name = "description")
    public String description;

    @Column(name = "address")
    public String address;

    @Column(name = "birthday")
    private LocalDate birthday;

//    @Enumerated(EnumType.STRING)
//    @Column(length = 20, nullable = false)
//    private UserStatus userStatus = UserStatus.USER_EXIST;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

//    public enum UserStatus {
//        USER_EXIST("이미 가입한 회원"),
//        USER_NOT_EXIST("가입하지 않은 회원");

//        @Getter
//        private String status;
//
//        UserStatus(String status) {
//            this.status = status;
//        }
//    }

    public User(String email, String userNickname, String description, String address, LocalDate birthday) {
        this.email = email;
        this.userNickname = userNickname;
        this.description = description;
        this.address = address;
        this.birthday = birthday;
    }
}

