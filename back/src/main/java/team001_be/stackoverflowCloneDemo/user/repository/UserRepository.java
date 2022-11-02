package team001_be.stackoverflowCloneDemo.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team001_be.stackoverflowCloneDemo.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByEmail(String email);
    public Optional<User> findByUserId(Long userId);
    public User findByEmailAndPassword(String email, String password);

    @Query(value = "SELECT email FROM user WHERE user.active != true",nativeQuery = true)
    public User getOnlyClosedUser(@Param("email") String email);

}
