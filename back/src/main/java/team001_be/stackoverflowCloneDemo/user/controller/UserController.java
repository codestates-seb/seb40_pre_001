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
import team001_be.stackoverflowCloneDemo.user.dto.UserPatchDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.mapper.UserMapper;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequiredArgsConstructor //-> final 필드 에대한 생성자 생성해주는 어노테이션
@RequestMapping("/users")
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


    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK
        );

    }

    //4. 회원 정보 전부 출력 -  완료
    @GetMapping("/all-users")
    public List<UserDto> retrieveUsers() {
        return userService.findAll();
    }

    // 회원정보 수정
    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(
            @PathVariable("user-id") @Positive long usersId,
            @Valid @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(usersId);

        User response =
                UserService.update(mapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.OK);
    }
}
