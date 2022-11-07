package team001_be.stackoverflowCloneDemo.tag.entity;

import com.sun.xml.bind.v2.runtime.Name;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
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
    @Column
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @Column(nullable = false)
    private String tagDescription;

    @Builder
    public Tag(Long tagId, String tagName, String tagDescription){
        this.tagId = tagId;
        this.tagName = tagName;
        this.tagDescription = tagDescription;
    }

    @OneToMany(mappedBy = "tag", targetEntity = QuestionTag.class)
    @ToString.Exclude
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<QuestionTag> questionTagList = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag){
        this.questionTagList.add(questionTag);
        if(questionTag.getTag() != this){
            questionTag.addTag(this);
        }
    }
}
