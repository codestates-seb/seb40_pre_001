package team001_be.stackoverflowCloneDemo.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long AnswerId;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(length = 65535, nullable = false)
    private String context;

    private int voteCount;

    private boolean isAccepted;
}
