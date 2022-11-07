package team001_be.stackoverflowCloneDemo.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
