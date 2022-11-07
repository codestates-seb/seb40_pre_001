package team001_be.stackoverflowCloneDemo.tag.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.tag.dto.TagPostDto;
import team001_be.stackoverflowCloneDemo.tag.dto.TagResponseDto;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    public Tag tagPostDtoToTag(TagPostDto tagPostDto);
    default TagResponseDto tagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto.TagResponseDtoBuilder tagResponseDto = TagResponseDto.builder();

        tagResponseDto.tagId( tag.getTagId() );
        tagResponseDto.tagName( tag.getTagName() );
        tagResponseDto.tagDescription( tag.getTagDescription() );
        if(tag.getQuestionTagList() != null){
            tagResponseDto.usedTagCnt(tag.getQuestionTagList().size());
        }

        return tagResponseDto.build();
    }

    default List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagResponseDto( tag ) );
        }

        return list;
    }
}
