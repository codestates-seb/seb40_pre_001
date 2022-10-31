package team001_be.stackoverflowCloneDemo.user.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;
import team001_be.stackoverflowCloneDemo.user.Hashing;
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
@RequestMapping("/login")
@Validated
@Slf4j
public class UserController {
    @Autowired
    private final UserRepository userRepository;

    private final UserMapper mapper;
    private final UserService userService;

    public UserController(UserRepository userRepository, UserMapper mapper, UserService userService) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.userService = userService;
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/signup")
    @ResponseBody
    public String registerUser(@RequestBody User newUser) {
        String email = newUser.getEmail();
        String password = Hashing.hashingPassword(newUser.getPassword());
        String userNickname = newUser.getUserNickname();

        if (email.equals(""))
            return "failed";

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setUserNickname(userNickname);

        if (userRepository.findByEmail(email) != null)
            return "failed";

        userRepository.save(user);

        return "success";
    }


    @PostMapping("/user/post")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestbody) {
        User user = mapper.userPostDtoToUser(requestbody);

        User createdUser = userService.createUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(createdUser)),
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

    //회원정보 삭제
/*    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(
            @PathVariable("user-id") @Positive long usersId) {
        System.out.println("# delete user");
        UserService.deleteUser(usersId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }*/


   /* //회원정보수정//
    @GetMapping("/user/info")
    public String userInfo(Model model, Principal principal){
        String userId = principal.getName();
        UserDTO detail = userService.detail(userId);
        model.addAttribute("detail", detail);
        return "user/info";
    }
    @GetMapping("/user/password")
    public String userPassword(Model model, Principal principal){
        String userId = principal.getName();
        UserDTO detail = userService.detail(userId);
        model.addAttribute("detail", detail);
        return "user/password";
    }
    @GetMapping("/user/takecourse")
    public String userTaskcourse(Model model, Principal principal){
        String userId = principal.getName();
        UserDTO detail = userService.detail(userId);
        model.addAttribute("detail", detail);
        return "user/takecourse";
    }

    @PostMapping("/member/password")
    Public String userPasswordSubmit(Model model, UserInput parameter,
                                       Princpal ){
        String userId = principal.getName();
    }*/
}

