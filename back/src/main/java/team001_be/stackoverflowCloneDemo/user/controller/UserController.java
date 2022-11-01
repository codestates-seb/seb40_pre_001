package team001_be.stackoverflowCloneDemo.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.auth.jwt.JwtTokenizer;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.mapper.UserMapper;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor //-> final 필드 에대한 생성자 생성해주는 어노테이션
@RequestMapping
@Validated
@Slf4j
public class UserController {
    @Autowired
    private final UserRepository userRepository;
    private final JwtTokenizer jwtTokenizer;
    private final PasswordEncoder passwordEncoder;

    private final UserMapper mapper;
    private final UserService userService;


    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = mapper.userPostDtoToUser(userPostDto);
        User createdUser = userService.createUser(user);

        UserDto.Response response = mapper.userToUserResponseDto(createdUser);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


//    @GetMapping("/{user-id}")
//    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
//        User user = userService.findUser(userId);
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
//
//    }
}

////테스트 해본 로직
//   // 회원가입
//    @PostMapping("/join")
//    public Long join(@RequestBody Map<String, String> user) {
//        return userRepository.save(User.builder()
//                .email(user.get("email"))
//                .password(passwordEncoder.encode(user.get("password")))
//                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
//                .build()).getUserId();
//    }
//
//    // 로그인
//    @PostMapping("/login")
//    public String login(@RequestBody Map<String, String> user) {
//        User member = userRepository.findByEmail(user.get("email"))
//                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다."));
//        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
//            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
//        }
//        return jwtTokenizer.createToken(member.getUsername(), member.getRoles());
//    }
//}


