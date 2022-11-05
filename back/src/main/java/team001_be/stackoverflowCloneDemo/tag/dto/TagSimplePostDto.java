package team001_be.stackoverflowCloneDemo.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class TagSimplePostDto {
    @NotNull
    @Setter
    private Long tagId;
}