package team001_be.stackoverflowCloneDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class StackoverflowCloneDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackoverflowCloneDemoApplication.class, args);
	}

}

