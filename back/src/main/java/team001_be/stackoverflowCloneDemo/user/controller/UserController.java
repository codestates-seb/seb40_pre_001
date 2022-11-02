package team001_be.stackoverflowCloneDemo.user.controller;

import io.jsonwebtoken.io.IOException;
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

import team001_be.stackoverflowCloneDemo.user.dto.UserEmailDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPatchDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;

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

    private final UserRepository userRepository;
    private final JwtTokenizer jwtTokenizer;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper mapper;
    private final UserService userService;

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = mapper.userPostDtoToUser(userPostDto);
        User createdUser = userService.createUser(user);

        UserResponseDto response = mapper.userToUserResponseDto(createdUser);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    // 회원 정보 전부 출력 -  완료
    @GetMapping()
    public List<UserResponseDto> userResponseDto() {
        return userService.findAllUsers();
    }
    //개인 회원 profile 요청
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK
        );
    }

    //개인 회원 Stats 요청
  /*  @GetMapping("/{user-id}/{userNickname}?tab=profile")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK
        );
    }*/


    // 개인 회원 정보 수정
    @PatchMapping("/edit/{user-id}")
    public ResponseEntity updateUser(@PathVariable("user-id") @Positive Long userId,
                                     @Valid @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);
        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }

    // 개인 이메일 수정
    @PatchMapping("/email/settings/{user-id}")
    public ResponseEntity updateUser(@PathVariable("user-id") @Positive Long userId,
                                     @Valid @RequestBody UserEmailDto UserEmailDto){
        UserEmailDto.setUserId(userId);
        User user = userService.updateUser(mapper.userEmailDtoToUser(UserEmailDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }

    // 개인 비활성화 (deactivation)
    @PutMapping("/deactivate/{user-id}")
    public ResponseEntity disableUser(@PathVariable("user-id") @Positive Long userId,
                                      @Valid @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);
        User user = userService.disableUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }

    // 로그인 실패처리
    @GetMapping("/login?error")
    public String fail() throws IOException {
        return "redirect:/?error";
    }

    // 회원삭제
    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive Long userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
