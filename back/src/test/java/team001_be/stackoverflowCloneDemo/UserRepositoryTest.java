package team001_be.stackoverflowCloneDemo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.stream.IntStream;

//@DataJpaTest
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void insertDummyUsers() {
        IntStream.rangeClosed(20, 50).forEach(i -> {
            User user = User.builder()
                    .email("yhwang" + i + "@spring.com")
                    .userNickname(i + "happyuser")
                    /*.active(true)*/
                    .password(passwordEncoder.encode("abcd00000"))
                    .build();
            System.out.println(userRepository.save(user));
        });

    }
}


