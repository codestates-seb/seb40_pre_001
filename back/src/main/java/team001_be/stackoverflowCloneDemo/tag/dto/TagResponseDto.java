package team001_be.stackoverflowCloneDemo.tag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class TagResponseDto {
    @NotNull
    private Long tagId;
    @NotBlank
    private String tagName;
    @NotBlank
    private String tagDescription;
    @NotNull
    private int usedTagCnt;

    @Builder
    public TagResponseDto(Long tagId, String tagName, String tagDescription, int usedTagCnt) {
        this.tagId = tagId;
        this.tagName = tagName;
        this.tagDescription = tagDescription;
        this.usedTagCnt = usedTagCnt;
    }
}
