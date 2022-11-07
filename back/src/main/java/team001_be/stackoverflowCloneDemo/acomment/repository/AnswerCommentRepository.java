package team001_be.stackoverflowCloneDemo.acomment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.acomment.entity.AnswerComment;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment,Long> {
}