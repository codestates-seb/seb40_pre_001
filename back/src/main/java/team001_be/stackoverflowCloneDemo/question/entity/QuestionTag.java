package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.*;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int questionTagId;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "TAG_ID")
    @Setter
    private Tag tag;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "QUESTION_ID")
    @Setter
    private Question question;

    @Builder
    public QuestionTag(Tag tag, Question question) {
        this.tag = tag;
        this.question = question;
    }

    public void addTag(Tag tag){
        this.tag = tag;
        if(!this.tag.getQuestionTagList().contains(this)){
            this.tag.getQuestionTagList().add(this);
        }
    }

    public void addQuestion(Question question){
        this.question = question;
        if(!this.question.getQuestionTagList().contains(this)){
            this.question.getQuestionTagList().add(this);
        }
    }
}
