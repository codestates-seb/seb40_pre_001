package team001_be.stackoverflowCloneDemo.comment.entity;

import lombok.*;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class QuestionComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionCommentId;

    /*erd 상으로는 User와 관계 매핑을 해야하는데
      홈페이지상 확인해보니 user => '내가 쓴 댓글'을 확인하는 기능이
      존재하지 않아 매핑을 하지 않았습니다..추후 필요하면 추가하면 될 듯 합니다*/
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    @ToString.Exclude
    @Setter
    private Question question;

    @Column(length = 200, nullable = false)
    private String context;

    @Builder
    public QuestionComment(Long questionCommentId, Long userId, String context) {
        this.questionCommentId = questionCommentId;
        this.userId = userId;
        this.context = context;
    }
}
