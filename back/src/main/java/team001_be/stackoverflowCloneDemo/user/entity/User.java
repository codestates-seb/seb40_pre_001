package team001_be.stackoverflowCloneDemo.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
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
@Table(name = "users")
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long userId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false, updatable = false)
    private String password;

    @Column
    public String userNickname;

    @Column
    public String description;

    @Column
    public String address;

    @Column
    private LocalDate birthday;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    @JsonIgnore
    private List<Question> questionList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    @JsonIgnore
    private List<Answer> answerList = new ArrayList<>();

    private int userViewCounts;

    public void updateUserViewCounts(int userViewCounts) {
        this.userViewCounts = userViewCounts;
    }

    @Builder
    public User(Long userId,String email, String password, String userNickname, String description, String address, LocalDate birthday) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.userNickname = userNickname;
        this.description = description;
        this.address = address;
        this.birthday = birthday;
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

    public void addQuestionList(Question question){
        this.questionList.add(question);
    }

    public void addAnswerList(Answer answer){
        this.answerList.add(answer);
    }

}
