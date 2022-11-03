package team001_be.stackoverflowCloneDemo.comment.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionCommentId;

    /*erd 상으로는 User와 관계 매핑을 해야하는데
      홈페이지상 확인해보니 user => '내가 쓴 댓글'을 확인하는 기능이
      존재하지 않아 매핑을 하지 않았습니다..추후 필요하면 추가하면 될 듯 합니다*/
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @ToString.Exclude
    @Setter
    private User user;

    @Column(columnDefinition = "TEXT", length = 200, nullable = false)
    private String questionCommentContent;

    private String questionCommentUsername;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    @ToString.Exclude
    @Setter
    private Question question;

}
