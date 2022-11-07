package team001_be.stackoverflowCloneDemo.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.user.dto.UserEmailDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserLoginDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPatchDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T16:20:32+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserPostDto userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( userPostDto.getEmail() );
        user.password( userPostDto.getPassword() );
        user.userNickname( userPostDto.getUserNickname() );

        return user.build();
    }

    @Override
    public User userPatchDtoToUser(UserPatchDto userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.userId( userPatchDto.getUserId() );
        user.email( userPatchDto.getEmail() );
        user.password( userPatchDto.getPassword() );
        user.userNickname( userPatchDto.getUserNickname() );
        user.address( userPatchDto.getAddress() );
        user.birthday( userPatchDto.getBirthday() );

        return user.build();
    }

    @Override
    public User userLoginDtoToUser(UserLoginDto userLoginDto) {
        if ( userLoginDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( userLoginDto.getEmail() );
        user.password( userLoginDto.getPassword() );

        return user.build();
    }

    @Override
    public User userEmailDtoToUser(UserEmailDto userEmailDto) {
        if ( userEmailDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.userId( userEmailDto.getUserId() );
        user.email( userEmailDto.getEmail() );

        return user.build();
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
        userResponseDto.setCreatedAt( user.getCreatedAt() );
        userResponseDto.setModifiedAt( user.getModifiedAt() );

        return userResponseDto;
    }
}
