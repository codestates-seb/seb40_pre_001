package team001_be.stackoverflowCloneDemo.tag.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;
import team001_be.stackoverflowCloneDemo.tag.dto.TagPostDto;
import team001_be.stackoverflowCloneDemo.tag.dto.TagResponseDto;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;
import team001_be.stackoverflowCloneDemo.tag.mapper.TagMapper;
import team001_be.stackoverflowCloneDemo.tag.service.TagService;

import javax.validation.Valid;

@RestController
@Validated
@RequestMapping("/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;

    public TagController(TagService tagService, TagMapper tagMapper) {
        this.tagService = tagService;
        this.tagMapper = tagMapper;
    }

    @PostMapping("")
    public ResponseEntity postTag(@Valid @RequestBody TagPostDto tagPostDto){
        Tag tag = tagService.createTag(tagMapper.tagPostDtoToTag(tagPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(tagMapper.tagToTagResponseDto(tag))
                , HttpStatus.CREATED);
    }
}
