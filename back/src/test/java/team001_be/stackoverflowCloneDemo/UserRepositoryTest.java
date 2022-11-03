package team001_be.stackoverflowCloneDemo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.stream.IntStream;

@Transactional
@SpringBootTest
public class UserRepositoryTest {
    @Resource
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

/*/222223*/

    @Test
    public void insertDummyUsers() {
        IntStream.rangeClosed(20, 50).forEach(i -> {
            User user = User.builder()
                    .email("yhwang" + i + "@spring.com")
                    .userNickname(i + "happyuser")
                    /*.active(true)*/
                    .password(passwordEncoder.encode("abcd00000"))
                    .build();
            userRepository.save(user);
        });
    }
}


