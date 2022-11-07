package team001_be.stackoverflowCloneDemo.question.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionTagPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionTagMapper {
//    public List<QuestionTag> questionTagPostDtosToQuestionTagList(List<QuestionTagPostDto> questionTagPostDtos);
//
//    default QuestionTag questionTagPostDtoToQuestionTag(QuestionTagPostDto questionTagPostDto) {
//        if ( questionTagPostDto == null ) {
//            return null;
//        }
//        Tag.TagBuilder tag = Tag.builder();
//        tag.tagId(questionTagPostDto.getTagId());
//
//        Question.QuestionBuilder question = Question.builder();
//        question.questionId(questionTagPostDto.getQuestionId());
//
//        QuestionTag.QuestionTagBuilder questionTag = QuestionTag.builder();
//        questionTag.tag(tag.build());
//        questionTag.question(question.build());
//
//        return questionTag.build();
//    }

}
