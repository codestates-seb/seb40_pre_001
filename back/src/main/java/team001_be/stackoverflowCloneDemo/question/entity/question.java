package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
public class question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, updatable = false)
    private int uerId;

    @Column(length = 100, nullable = false, unique = true)
    private String questionName;

    @Column(length = 65535, nullable = false)
    private String context;

    private int viewCount;

    private int voteCount;

    //erd 설계와 이름 다름
    //답변을 선택했는지 여부
    @Column(nullable = false)
    private boolean hasAccepted;

    @Column(nullable = false)
    private Timestamp dateCreated;

    private Timestamp dateModified;
}
