package team001_be.stackoverflowCloneDemo.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.question.entity.question;

import java.util.Optional;

public interface questionRepository extends JpaRepository<question, Long> {
    Optional<question> findByQuestionName(String questionName);

    //이외 필요한 sql 쿼리 있으면 추가하면 됨.
}
