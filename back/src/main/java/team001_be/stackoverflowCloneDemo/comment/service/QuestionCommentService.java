package team001_be.stackoverflowCloneDemo.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team001_be.stackoverflowCloneDemo.comment.entity.QuestionComment;
import team001_be.stackoverflowCloneDemo.comment.repository.QuestionCommentRepository;
import team001_be.stackoverflowCloneDemo.exception.BusinessLogicException;
import team001_be.stackoverflowCloneDemo.exception.ExceptionCode;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.repository.QuestionRepository;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionCommentService {
    private final QuestionCommentRepository questionCommentRepository;
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    private final QuestionService questionService;
    private final UserService userService;

    public QuestionComment createQuestionComment(QuestionComment questionComment, Long userId){


        questionComment.setUser(userService.findUser(userId));
        verifiedUser(questionComment);
        questionComment.setQuestionCommentUsername(userService.getUserNickname(userId));

        questionComment.setQuestion(questionService.findQuestion(questionComment.getQuestion().getQuestionId()));
        verifiedQuestion(questionComment);


        return questionCommentRepository.save(questionComment);
    }


    public QuestionComment findQuestionComment(Long questionCommentId){
        return findVerifiedCommentById(questionCommentId);
    }


    public QuestionComment updateQuestionComment(QuestionComment questionComment, Long userId){

        QuestionComment foundQuestionComment = findQuestionComment(questionComment.getQuestionCommentId());
        verifyWriter(userId,questionComment.getUser().getUserId());

        Optional.ofNullable(questionComment.getQuestionCommentContent())
                .ifPresent(foundQuestionComment::setQuestionCommentContent);
        Optional.ofNullable(questionComment.getQuestionCommentUsername())
                .ifPresent(foundQuestionComment::setQuestionCommentUsername);

        return questionCommentRepository.save(foundQuestionComment);
    }

    public void deleteQuestionComment(Long questionCommentId, Long userId){
        QuestionComment foundQuestionComment = findVerifiedCommentById(questionCommentId);
        Long postUserId = foundQuestionComment.getUser().getUserId();
        verifyWriter(postUserId, userId);
        questionCommentRepository.delete(foundQuestionComment);
    }
    private QuestionComment findVerifiedCommentById(Long questionCommentId){
        Optional<QuestionComment> optionalQuestionComment = questionCommentRepository.findById(questionCommentId);
        QuestionComment questionComment = optionalQuestionComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return questionComment;
    }

    private void verifyWriter(Long postUserId, Long editUserId){
        if(!postUserId.equals(editUserId)){
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
        }
    }

    private void verifiedUser(QuestionComment questionComment){
        userService.findUser(questionComment.getUser().getUserId());
    }

    private void verifiedQuestion(QuestionComment questionComment){
        questionService.findQuestion(questionComment.getQuestion().getQuestionId());
    }
}
