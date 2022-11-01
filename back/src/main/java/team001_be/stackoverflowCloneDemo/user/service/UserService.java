package team001_be.stackoverflowCloneDemo.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import team001_be.stackoverflowCloneDemo.auth.utils.CustomAuthorityUtils;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
  
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }  

    //save method
    public Long save(UserDto userDto){
        User user = User.toSaveEntity(userDto);
        return userRepository.save(user).getUserId();
    }
    // 회원 정보 수정
    public static User update(User user) {
        userRepository.save(User.toUpdateEntity(UserDto.userDto));
        return user;
    }

    // 전체조회 service
    public List<UserDto> findAll() {
        List<User> userList = userRepository.findAll();
        List<UserDto> userDtoList =List<>();
        for (User user : userList){
            UserDto userDto = UserDto.toUserDto(user);
            userDtoList.add(userDto);
        }
        return userDtoList;
    }

    public User createUser(User user) {

        //등록된 이메일 확인
        verifyExistsEmail(user.getEmail());
        //Password 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        // DB에 User Role 저장
//        List<String> roles = authorityUtils.createRoles(user.getEmail());
//        user.setRoles(roles);
        return userRepository.save(user);
    }


    public User findUser(long userId){
        return findVerifiedUser(userId);
    }

    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("userId").descending()));
    }

    private void verifyExistsEmail(String email) {

        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));

        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

        if(findUser.getUserStatus() == User.UserStatus.USER_NOT_EXIST){
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }
        return findUser;
    }
}
