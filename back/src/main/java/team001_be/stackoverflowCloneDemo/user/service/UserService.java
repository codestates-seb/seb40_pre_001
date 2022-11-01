package team001_be.stackoverflowCloneDemo.user.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import team001_be.stackoverflowCloneDemo.auth.utils.CustomAuthorityUtils;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.mapper.UserMapper;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
  
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.userMapper = userMapper;
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

    public User findUser(Long userId){
        return findVerifiedUserById(userId);
    }

    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("userId").descending()));
    }

    // 전체조회 service
    public List<UserResponseDto> findAll() {
        List<User> userList = userRepository.findAll();
        List<UserResponseDto> userDtoList = new ArrayList<>();
        for (User user : userList){
            UserResponseDto userResponseDto = userMapper.userToUserResponseDto(user);
            userDtoList.add(userResponseDto);
        }
        return userDtoList;
    }


    public User updateUser(User user){
        User foundUser = findUser(user.getUserId());
        //user 권한 확인 jwt
        verifyUserAuthorization(user.getUserId(), foundUser.getUserId());

        Optional.ofNullable(user.getEmail())
                .ifPresent(foundUser::setEmail);
        Optional.ofNullable(user.getUserNickname())
                .ifPresent(foundUser::setUserNickname);
        Optional.ofNullable(user.getAddress())
                .ifPresent(foundUser::setAddress);
        Optional.ofNullable(user.getPassword())
                .ifPresent(foundUser::setPassword);
        Optional.ofNullable(user.getBirthday())
                .ifPresent(foundUser::setBirthday);

        return saveUser(foundUser);
    }



    public void deleteUser(Long userId){
        User user = findVerifiedUserById(userId);
        verifyUserAuthorization(userId, findUser(user.getUserId()).getUserId());

        userRepository.delete(user);
    }

    private User findVerifiedUserById(Long userId){
        Optional<User> optionalUser = userRepository.findByUserId(userId);
        User foundUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return foundUser;
    }

    private User saveUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    private void verifyUserAuthorization(Long modifiedUserId, Long oldUserId){
        //수정하려는 user가 질문 작성자가 맞는지 check
        if(!Objects.equals(modifiedUserId, oldUserId))
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
    }

    private void verifyExistsEmail(String email) {

        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
