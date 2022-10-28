package team001_be.stackoverflowCloneDemo.user.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;
import team001_be.stackoverflowCloneDemo.user.Hashing;
import team001_be.stackoverflowCloneDemo.user.dto.UserDTO;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.mapper.UserMapper;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.validation.constraints.Positive;

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

/*
    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestbody) {
        User user = mapper.userPostDtoToUser(requestbody);

        User createdUser = userService.createUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(createdUser)),
                HttpStatus.CREATED);
    }

 */

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId){
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    @ResponseBody
    public String registerUser(@RequestBody User newUser){
        String email = newUser.getEmail();
        String password = Hashing.hashingPassword(newUser.getPassword());
        String userNickname = newUser.getUserNickname();

        if(email.equals("") || password.equals("") || userNickname.equals(""))
            return "failed";

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setUserNickname(userNickname);

        if(userRepository.findByEmail(email).isPresent())
            return "failed";

        userRepository.save(user);

        return "success";
    }

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
