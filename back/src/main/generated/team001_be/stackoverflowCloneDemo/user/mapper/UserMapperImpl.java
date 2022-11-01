package team001_be.stackoverflowCloneDemo.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-01T04:29:46+0900",
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
    public UserDto.Response userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        long userId = 0L;
        String email = null;
        String userNickname = null;

        if ( user.getUserId() != null ) {
            userId = user.getUserId();
        }
        email = user.getEmail();
        userNickname = user.getUserNickname();

        UserDto.Response response = new UserDto.Response( userId, email, userNickname );

        return response;
    }
}
