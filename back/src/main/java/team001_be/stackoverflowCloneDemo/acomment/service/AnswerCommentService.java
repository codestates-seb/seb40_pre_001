package team001_be.stackoverflowCloneDemo.acomment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentPostDto;
import team001_be.stackoverflowCloneDemo.acomment.entity.AnswerComment;
import team001_be.stackoverflowCloneDemo.acomment.repository.AnswerCommentRepository;
import team001_be.stackoverflowCloneDemo.answer.repository.AnswerRepository;
import team001_be.stackoverflowCloneDemo.answer.service.AnswerService;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerCommentService {

    private final AnswerCommentRepository answerCommentRepository;
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final AnswerService answerService;
    private final UserService userService;

    public AnswerComment createAnswerComment(AnswerComment answerComment, Long userId){
        answerComment.setUser(userService.findUser(userId));
        verifyUser(answerComment);
        answerComment.setAnswerCommentUsername(userService.getUserNickname(userId));

        answerComment.setAnswer(answerService.findAnswer(answerComment.getAnswer().getAnswerId()));
        verifyUser(answerComment);

        return answerCommentRepository.save(answerComment);
    }

    public AnswerComment findAnswerComment(Long answerCommentId){
        return findVerifiedCommentById(answerCommentId);
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment, Long userId){

        AnswerComment foundAnswerComment = findAnswerComment(answerComment.getAnswerCommentId());
        verifyWriter(userId, answerComment.getUser().getUserId());

        Optional.ofNullable(answerComment.getAnswerCommentContent())
                .ifPresent(foundAnswerComment::setAnswerCommentContent);
        Optional.ofNullable(answerComment.getAnswerCommentUsername())
                .ifPresent(foundAnswerComment::setAnswerCommentUsername);

        return answerCommentRepository.save(foundAnswerComment);
    }

    public void deleteAnswerComment(Long answerCommentId, Long userId){
        AnswerComment foundAnswerComment = findVerifiedCommentById(answerCommentId);
        Long postUserId = foundAnswerComment.getUser().getUserId();
        verifyWriter(postUserId,userId);
        answerCommentRepository.delete(foundAnswerComment);

    }

    private AnswerComment findVerifiedCommentById(Long answerCommentId){
        Optional<AnswerComment> optionalAnswerComment = answerCommentRepository.findById(answerCommentId);
        AnswerComment answerComment = optionalAnswerComment.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return answerComment;
    }

    private void verifyWriter(Long postUserId, Long editUserid){
        if(!postUserId.equals(editUserid)){
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
        }

        }
    private void verifyUser(AnswerComment answerComment){
        userService.findUser(answerComment.getUser().getUserId());
    }

    private void verifyQuestion(AnswerComment answerComment){
        answerService.findAnswer(answerComment.getAnswer().getAnswerId());
    }
}

