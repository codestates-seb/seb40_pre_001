package team001_be.stackoverflowCloneDemo.tag.entity;

import com.sun.xml.bind.v2.runtime.Name;
import lombok.*;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TAG_ID")
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @Column(nullable = false)
    private String tagDescription;

    @Builder
    public Tag(String tagName, String tagDescription){
        this.tagName = tagName;
        this.tagDescription = tagDescription;
    }

    @OneToMany(mappedBy = "tag", targetEntity = QuestionTag.class)
    @ToString.Exclude
    private List<QuestionTag> questionTagList = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag){
        this.questionTagList.add(questionTag);
        if(questionTag.getTag() != this){
            questionTag.addTag(this);
        }
    }
}
