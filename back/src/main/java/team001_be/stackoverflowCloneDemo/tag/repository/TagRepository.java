package team001_be.stackoverflowCloneDemo.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.tag.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
