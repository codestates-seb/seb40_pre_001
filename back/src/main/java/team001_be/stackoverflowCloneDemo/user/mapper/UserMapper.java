package team001_be.stackoverflowCloneDemo.user.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.user.dto.UserLoginDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
     User userPostDtoToUser(UserPostDto requestbody);
//        User user = new User();
//
//        user.setEmail(requestbody.getEmail());
//        user.setPassword(requestbody.getPassword());
//
//        return user;


     UserResponseDto userToUserResponseDto(User user);
//      UserResponseDto userResponseDto = new UserResponseDto();
//
//      userResponseDto.setEmail(user.getEmail());
//      userResponseDto.setUserStatus(user.getUserStatus());
//
//      return userResponseDto;
}

