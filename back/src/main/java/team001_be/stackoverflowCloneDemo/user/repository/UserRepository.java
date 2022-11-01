package team001_be.stackoverflowCloneDemo.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
}
