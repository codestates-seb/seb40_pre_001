package team001_be.stackoverflowCloneDemo.question.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;
import team001_be.stackoverflowCloneDemo.tag.dto.TagSimplePostDto;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

import java.util.*;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    List<QuestionSimpleResponseDto> questionListToQuestionSimpleResponseDtos(List<Question> questionList);

    default QuestionSimpleResponseDto questionToQuestionSimpleResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionSimpleResponseDto questionSimpleResponseDto = new QuestionSimpleResponseDto();

        questionSimpleResponseDto.setQuestionId( question.getQuestionId() );
        questionSimpleResponseDto.setUserId(question.getUser().getUserId());
        questionSimpleResponseDto.setQuestionTitle( question.getQuestionTitle() );
        questionSimpleResponseDto.setContext( question.getContext() );
        if ( question.getViewCount() != null ) {
            questionSimpleResponseDto.setViewCount( question.getViewCount().intValue() );
        }
        if ( question.getVoteCount() != null ) {
            questionSimpleResponseDto.setVoteCount( question.getVoteCount().intValue() );
        }
        List<QuestionTag> list = question.getQuestionTagList();
        if ( list != null && !list.isEmpty() ) {

            List<TagSimplePostDto> tags = list.stream().map(questionTag -> {
                       TagSimplePostDto tagSimplePostDto = new TagSimplePostDto();
                       tagSimplePostDto.setTagId(questionTag.getTag().getTagId());
                       return tagSimplePostDto;
                    }).collect(Collectors.toList());
            questionSimpleResponseDto.setTagList(tags);
        }
        questionSimpleResponseDto.setHasAccepted( question.isHasAccepted() );
        questionSimpleResponseDto.setCreatedAt(question.getCreatedAt());
        questionSimpleResponseDto.setModifiedAt(question.getModifiedAt());

        return questionSimpleResponseDto;
    }

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question.QuestionBuilder questionBuilder = Question.builder();

        questionBuilder.questionTitle( questionPostDto.getQuestionTitle() );
//        questionBuilder.user(user); //이거 questionService의 createQuetion에서 또 설정한다. 확인요망!!!
        questionBuilder.context( questionPostDto.getContext() );

        Question question = questionBuilder.build();
        if(question.getQuestionTagList()!= null) {
            List<QuestionTag> questionTagList = questionPostDto.getTagIdList().stream()
                    .map(tagSimplePostDto -> {
                        Tag.TagBuilder tag = Tag.builder();
                        tag.tagId(tagSimplePostDto.getTagId());

                        QuestionTag.QuestionTagBuilder questionTag = QuestionTag.builder();
//                    questionTag.question(question); //이때 저장된 question은 questionTagList가 저장 안됐는데 괜찮나??
                        questionTag.tag(tag.build());
                        return questionTag.build();
                    }).collect(Collectors.toCollection(ArrayList::new));
            question.setQuestionTagList(questionTagList);
        }else{
            List<QuestionTag> questionTagList = new ArrayList<>();
            question.setQuestionTagList(questionTagList);
        }
        return question;
    }
}
