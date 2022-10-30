package team001_be.stackoverflowCloneDemo.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByQuestionTitle(String questionTitle);

    //이외 필요한 sql 쿼리 있으면 추가하면 됨.
}
