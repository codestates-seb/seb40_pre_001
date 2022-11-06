package team001_be.stackoverflowCloneDemo.user.mapper;

import org.mapstruct.Mapper;

import team001_be.stackoverflowCloneDemo.answer.dto.AnswerResponseDto;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.dto.*;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface UserMapper {
  
     User userPostDtoToUser(UserPostDto userPostDto);
     User userPatchDtoToUser(UserPatchDto userPatchDto);

     User userLoginDtoToUser(UserLoginDto userLoginDto);
     User userEmailDtoToUser(UserEmailDto userEmailDto);
     UserResponseDto userToUserResponseDto(User user);


/*     default Integer questionCountsByUserId(User userId){
          Optional<User> user = Optional.ofNullable(userService.findUser(userId));
          Integer count = user.getQuestionList().size()
     }*/














}

