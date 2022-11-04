package team001_be.stackoverflowCloneDemo.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.user.dto.UserLoginDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPatchDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T03:28:10+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserPostDto userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( userPostDto.getEmail() );
        user.setPassword( userPostDto.getPassword() );
        user.setUserNickname( userPostDto.getUserNickname() );

        return user;
    }

    @Override
    public User userPatchDtoToUser(UserPatchDto userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( userPatchDto.getUserId() );
        user.setEmail( userPatchDto.getEmail() );
        user.setPassword( userPatchDto.getPassword() );
        user.setUserNickname( userPatchDto.getUserNickname() );
        user.setAddress( userPatchDto.getAddress() );
        user.setBirthday( userPatchDto.getBirthday() );

        return user;
    }

    @Override
    public User userLoginDtoToUser(UserLoginDto userLoginDto) {
        if ( userLoginDto == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( userLoginDto.getEmail() );
        user.setPassword( userLoginDto.getPassword() );

        return user;
    }

    @Override
    public UserResponseDto userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUserId( user.getUserId() );
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setUserNickname( user.getUserNickname() );
        userResponseDto.setDescription( user.getDescription() );
        userResponseDto.setAddress( user.getAddress() );
        userResponseDto.setBirthday( user.getBirthday() );

        return userResponseDto;
    }
}
