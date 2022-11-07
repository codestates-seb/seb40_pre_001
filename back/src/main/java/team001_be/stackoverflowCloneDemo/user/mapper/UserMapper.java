package team001_be.stackoverflowCloneDemo.user.mapper;

import org.mapstruct.Mapper;

import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.dto.*;

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

