package team001_be.stackoverflowCloneDemo.question.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionTagPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.entity.QuestionTag;
import team001_be.stackoverflowCloneDemo.tag.dto.TagSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.ArrayList;
import java.util.List;
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

            List<TagSimpleResponseDto> tags = list.stream().map(questionTag -> {
                       TagSimpleResponseDto tagSimpleResponseDto = new TagSimpleResponseDto();
                       tagSimpleResponseDto.setTagId(questionTag.getTag().getTagId());
                       return tagSimpleResponseDto;
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

        List<QuestionTag> questionTagList = questionPostDto.getQuestionTags().stream()
                .map(questionTagPostDto -> {
                    Tag.TagBuilder tag = Tag.builder();
                    tag.tagId(questionTagPostDto.getTagId());

                    QuestionTag.QuestionTagBuilder questionTag = QuestionTag.builder();
//                    questionTag.question(question); //이때 저장된 question은 questionTagList가 저장 안됐는데 괜찮나??
                    questionTag.tag(tag.build());
                    return questionTag.build();
                        }).collect(Collectors.toList());

        question.setQuestionTagList(questionTagList);

        return question;
    }
}
