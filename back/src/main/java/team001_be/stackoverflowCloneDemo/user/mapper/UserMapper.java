package team001_be.stackoverflowCloneDemo.user.mapper;

import org.mapstruct.Mapper;

import team001_be.stackoverflowCloneDemo.user.dto.*;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
  
     User userPostDtoToUser(UserPostDto userPostDto);
     User userPatchDtoToUser(UserPatchDto userPatchDto);

     User userLoginDtoToUser(UserLoginDto userLoginDto);
     User userEmailDtoToUser(UserEmailDto userEmailDto);
     UserResponseDto userToUserResponseDto(User user);
}

