package team001_be.stackoverflowCloneDemo.question.service;

import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.tag.service.TagService;

@Service
public class QuestionTagService {
    private final QuestionService questionService;
    private final TagService tagService;

    public QuestionTagService(QuestionService questionService, TagService tagService) {
        this.questionService = questionService;
        this.tagService = tagService;
    }


}
