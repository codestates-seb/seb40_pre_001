package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

@NoArgsConstructor
@Getter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, updatable = false)
    private int uerId;

    @Column(length = 100, nullable = false, unique = true)
    private String questionTitle;

    @Column(length = 65535, nullable = false)
    private String context;

    private int viewCount;

    private int voteCount;


    @OneToMany(mappedBy = "QuestionTag", cascade = CascadeType.ALL)
    //CascadeType.All을 하면 question이 수정, 삭제될때 questionTagList도 따라서 수정, 삭제됨
    @ToString.Exclude
    private final List<QuestionTag> questionTagList = new ArrayList<>();

    //erd 설계와 이름 다름
    //답변을 선택했는지 여부
    @Column(nullable = false)
    private boolean hasAccepted;

    @Column(nullable = false)
    private Timestamp dateCreated;

    private Timestamp dateModified;

    //@Builder를 사용함. 이건 팀원들과 이야기해봐야 할 듯
    @Builder
    public Question(int uerId, String questionTitle, String context){
        this.uerId = uerId;
        this.questionTitle = questionTitle;
        this.context = context;
        this.viewCount = 0;
        this.voteCount = 0;
        this.hasAccepted = false;
        //dateCreated, dateModifeied 별도로 생성자에서 설정해줘야 하는지?
    }

    public void addQuestionTag(QuestionTag questiontag){
        this.questionTagList.add(questiontag);
        if(questiontag.getQuestion() != this){
            questiontag.addQuestion(this);
        }
    }
}
