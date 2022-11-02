package team001_be.stackoverflowCloneDemo.answer.entity;

import lombok.*;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    @ToString.Exclude
    @Setter
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @ToString.Exclude
    @Setter
    private User user;

    @Column(length = 65535, nullable = false)
    @Setter
    private String context;

    @Setter
    private int voteCount;

    @Setter
    private boolean isAccepted;

    @Builder
    public Answer(Long answerId,String context){
        this.answerId = answerId;
        this.context = context;
        this.voteCount = 0;
        this.isAccepted = false;
    }
}
