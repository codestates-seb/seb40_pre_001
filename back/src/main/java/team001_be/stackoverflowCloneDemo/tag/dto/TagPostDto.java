package team001_be.stackoverflowCloneDemo.tag.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class TagPostDto {
    @NotBlank
    private String tagName;
    @NotBlank
    private String tagDescription;
}
