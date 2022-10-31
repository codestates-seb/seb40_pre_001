package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

@NoArgsConstructor
@Getter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QUESTION_ID")
    private Long questionId;

    @Column(nullable = false, updatable = false)
    private Long uerId;

    @Column(length = 100, nullable = false, unique = true)
    private String questionTitle;

    @Column(length = 65535, nullable = false)
    private String context;

    private Long viewCount;

    private Long voteCount;

//    CascadeType.All을 하면 question이 수정/삭제될때 questionTagList도 따라서 수정/삭제됨
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, targetEntity = QuestionTag.class)
    private List<QuestionTag> questionTagList = new ArrayList<>();

    //erd 설계와 이름 다름
    //답변을 선택했는지 여부
    @Column(nullable = false)
    private boolean hasAccepted;

    @Column(nullable = false)
    private Timestamp dateCreated;

    private Timestamp dateModified;

    //@Builder를 사용함. 이건 팀원들과 이야기해봐야 할 듯
    @Builder
    public Question(Long uerId, String questionTitle, String context){
        this.uerId = uerId;
        this.questionTitle = questionTitle;
        this.context = context;
        this.viewCount = 0L;
        this.voteCount = 0L;
        this.hasAccepted = false;
        //dateCreated, dateModifeied 별도로 생성자에서 설정해줘야 하는지?
    }

    public void addQuestionTag(QuestionTag questiontag){
        this.questionTagList.add(questiontag);
        if(questiontag.getQuestion() != this){
            questiontag.addQuestion(this);
        }
    }

    public void updateViewCount(Long viewCount){
        this.viewCount = viewCount;
    }

    public void setQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public void setQuestionTagList(List<QuestionTag> questionTagList) {
        this.questionTagList = questionTagList;
    }
}
