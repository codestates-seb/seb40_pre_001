package team001_be.stackoverflowCloneDemo.answer.entity;

import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import team001_be.stackoverflowCloneDemo.acomment.entity.AnswerComment;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "question_id")
    @ToString.Exclude
    @Setter
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    @Setter
    private User user;

    @OneToMany(mappedBy = "answer", cascade = {CascadeType.REMOVE}, targetEntity = AnswerComment.class)
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<AnswerComment> answerCommentList = new ArrayList<>();

    @Column(length = 2000, nullable = false)
    @Setter
    private String context;

    @Setter
    private Long voteCount;

    @Setter
    private boolean isAccepted;

    @ElementCollection
    public List<Long> upVotedUserId = new ArrayList<>();

    @ElementCollection
    public List<Long> downVotedUserId = new ArrayList<>();

    @Builder
    public Answer(Long answerId, Question question, User user, String context, boolean isAccepted) {
        this.answerId = answerId;
        this.question = question;
        this.user = user;
        this.context = context;
        this.voteCount = 0L;
        this.isAccepted = isAccepted;
    }

    public void updateVoteCount(Long voteCnt) {
        this.voteCount = voteCnt;
    }
}
