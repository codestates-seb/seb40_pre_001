package team001_be.stackoverflowCloneDemo.acomment.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class AnswerComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerCommentId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @ToString.Exclude
    @Setter
    private User user;

    @Column(columnDefinition = "TEXT", length = 200, nullable = false)
    private String answerCommentContent;

    private String answerCommentUsername;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    @ToString.Exclude
    @Setter
    private Answer answer;


}