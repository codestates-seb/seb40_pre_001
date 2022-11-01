package team001_be.stackoverflowCloneDemo.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByEmail(String email);
    public Optional<User> findByUserId(Long userId);
    public User findByEmailAndPassword(String email, String password);


}
