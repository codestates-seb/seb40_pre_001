package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.audit.Auditable;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import javax.persistence.*;
import java.util.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QUESTION_ID")
    private Long questionId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @ToString.Exclude
    @Setter
    private User user;


    @Column(length = 100, nullable = false)
    private String questionTitle;

    @Column(length = 65535, nullable = false)
    private String context;

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    @Column(columnDefinition = "integer default 0", nullable = false)
    private Long viewCount; //조회수



    private Long voteCount;




    //    CascadeType.All을 하면 question이 수정/삭제될때 questionTagList도 따라서 수정/삭제됨
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE, targetEntity = QuestionTag.class)
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<QuestionTag> questionTagList = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE, targetEntity = Answer.class)
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<Answer> answerList = new ArrayList<>();


    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE, targetEntity = QuestionComment.class)
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<QuestionComment> questionCommentList = new ArrayList<>();

    @ElementCollection
    public List<Long> upVotedUserId = new ArrayList<>();

    @ElementCollection
    public List<Long> downVotedUserId = new ArrayList<>();

    //답변을 선택했는지 여부
    @Column(nullable = false)
    private boolean hasAccepted;

    //@Builder를 사용함. 이건 팀원들과 이야기해봐야 할 듯
    @Builder
    public Question(Long questionId, User user, String questionTitle, String context, List<QuestionTag> questionTagList) {
        this.questionId = questionId;
        this.user = user;
        this.questionTitle = questionTitle;
        this.context = context;
        this.viewCount = 0L;
        this.voteCount = 0L;
        this.hasAccepted = false;
        this.questionTagList = questionTagList;
    }

    public void addQuestionTag(QuestionTag questiontag) {
        this.questionTagList.add(questiontag);
        if (questiontag.getQuestion() != this) {
            questiontag.addQuestion(this);
        }
    }

    public void addAnswerList(Answer answer) {
        this.answerList.add(answer);
        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

    public void updateViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    public void updateVoteCount(Long voteCount) {
        this.voteCount = voteCount;
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
