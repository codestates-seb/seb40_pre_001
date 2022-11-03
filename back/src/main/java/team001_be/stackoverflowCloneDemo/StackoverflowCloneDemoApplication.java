package team001_be.stackoverflowCloneDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import java.util.stream.IntStream;

@SpringBootApplication
@EnableJpaAuditing
public class StackoverflowCloneDemoApplication {

	public static void main(String[] args) {


		SpringApplication.run(StackoverflowCloneDemoApplication.class, args);
	}

}
