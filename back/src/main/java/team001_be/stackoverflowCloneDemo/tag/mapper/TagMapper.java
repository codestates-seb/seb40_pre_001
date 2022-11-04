package team001_be.stackoverflowCloneDemo.tag.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.tag.dto.TagPostDto;
import team001_be.stackoverflowCloneDemo.tag.dto.TagResponseDto;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {
    public Tag tagPostDtoToTag(TagPostDto tagPostDto);
    public TagResponseDto tagToTagResponseDto(Tag tag);
}
