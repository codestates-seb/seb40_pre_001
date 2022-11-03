package team001_be.stackoverflowCloneDemo.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment,Long> {
}
