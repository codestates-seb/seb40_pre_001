package team001_be.stackoverflowCloneDemo.question.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tagId;

    @Column(nullable = false)
    private String tagName;

    @Column(nullable = false)
    private String tagDescription;

    @Builder
    public Tag(String tagName, String tagDescription){
        this.tagName = tagName;
        this.tagDescription = tagDescription;
    }

    @OneToMany(mappedBy = "QuestionTag")
    @ToString.Exclude
    private final List<QuestionTag> questionTagList = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag){
        this.questionTagList.add(questionTag);
        if(questionTag.getTag() != this){
            questionTag.addTag(this);
        }
    }
}
