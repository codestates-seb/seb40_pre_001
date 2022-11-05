package team001_be.stackoverflowCloneDemo.tag.service;

import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;
import team001_be.stackoverflowCloneDemo.tag.repository.TagRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }


    public Tag createTag(Tag tag){
        Optional<Tag> foundTag =  tagRepository.findByTagName(tag.getTagName());
        if(foundTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_DUPLICATE);
        }
        return tagRepository.save(tag);
    }

    public List<Tag> getAllTag(){
        return tagRepository.findAll();
    }

    public Tag findTag(Long tagId){
        return findVerifiedTag(tagId);
    }

    private Tag findVerifiedTag(Long tagId){
        Optional<Tag> optionalTag = tagRepository.findById(tagId);

        Tag foundTag = optionalTag.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));

        return foundTag;
    }
}
