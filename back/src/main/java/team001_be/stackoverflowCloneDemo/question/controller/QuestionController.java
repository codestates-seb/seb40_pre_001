package team001_be.stackoverflowCloneDemo.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.answer.mapper.AnswerMapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.mapper.QuestionMapper;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.response.MultiResponseDto;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Null;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerMapper answerMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerMapper answerMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerMapper = answerMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto), questionPostDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto), questionPatchDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question))
                , HttpStatus.OK);
    }

    //간단히 질문만 조회하는 함수
    @GetMapping("/simple/{question-id}")
    public ResponseEntity getQuestionSimple(@PathVariable("question-id") @Positive Long questionId){

        Question question = questionService.findQuestion(questionId);
        questionService.updateQuestionViewCount(question, question.getViewCount());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question))
                , HttpStatus.OK);
    }

    //질문 관련된 모든 것 조회하는 함수(질문, 질문 댓글, 답변, 답변 댓글)
    //아직 질문 댓글, 답변 댓글 수정 안됨
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId,
                HttpServletRequest req, HttpServletResponse res){
        Question question = questionService.findQuestion(questionId);
        questionService.updateQuestionViewCount(question, question.getViewCount());

        javax.servlet.http.Cookie[] cookies = req.getCookies();
        Map<String, String> mapCookie = new HashMap<String, String>();

        if(req.getCookies() != null){
            for (javax.servlet.http.Cookie obj : cookies) {
                mapCookie.put(obj.getName(), obj.getValue());
            }
        }
        String readCount = (mapCookie.get("read_count"));
        String newReadCount = ("|" + questionId);

        if(readCount != null){
            if(readCount.contains(newReadCount)) {
                javax.servlet.http.Cookie cookieSample =
                        new javax.servlet.http.Cookie("read_count", readCount + newReadCount);
                cookieSample.setMaxAge(1000);
                res.addCookie(cookieSample);
                questionService.updateQuestionViewCount(question, question.getViewCount()); //증가
            }
        }

        return new ResponseEntity<>(
                new MultiResponseDto(questionMapper.questionToQuestionSimpleResponseDto(question),
                        answerMapper.answerToAnswerResponseDtos(question.getAnswerList()))
                , HttpStatus.OK);

    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId,
                                         @Positive @RequestParam Long userId){
        questionService.deleteQuestion(questionId, userId);

        return new ResponseEntity<>("success",HttpStatus.NO_CONTENT);
    }
}
