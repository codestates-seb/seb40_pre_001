package team001_be.stackoverflowCloneDemo.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team001_be.stackoverflowCloneDemo.question.entity.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<List<Question>> findByQuestionTitleContaining(String questionTitle);
    Optional<List<Question>> findAllByOrderByCreatedAtDesc();
    //이외 필요한 sql 쿼리 있으면 추가하면 됨.

}
