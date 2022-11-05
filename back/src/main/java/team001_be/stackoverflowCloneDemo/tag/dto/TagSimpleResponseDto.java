package team001_be.stackoverflowCloneDemo.tag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class TagSimpleResponseDto {
    @NotNull
    @Setter
    private Long tagId;
}