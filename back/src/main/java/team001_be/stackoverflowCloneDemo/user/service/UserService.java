package team001_be.stackoverflowCloneDemo.user.service;

import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }




    // 회원 정보 수정
    public static User updateUser(User user) {
        // TODO document why this method is empty
        userRepository.save(user);

        return user;
    }


    public User createUser(User user){
        //등록된 이메일 확인
        verifyExistsEmail(user.getEmail());

        return userRepository.save(user);

    }

    public User findUser(long userId){
        return findVerifiedUser(userId);
    }

    public Page<User> findUsers(int page, int size){
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("userId").descending()));
    }

    private void verifyExistsEmail(String email){

        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

    public User findVerifiedUser(long userId){
        Optional<User> optionalUser = userRepository.findById(userId);

        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        if(findUser.getUserStatus() == User.UserStatus.USER_NOT_EXIST){
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }
        return findUser;
    }
}
