package team001_be.stackoverflowCloneDemo.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team001_be.stackoverflowCloneDemo.acomment.dto.AnswerCommentResponseDto;
import team001_be.stackoverflowCloneDemo.acomment.mapper.AnswerCommentMapper;
import team001_be.stackoverflowCloneDemo.answer.entity.Answer;
import team001_be.stackoverflowCloneDemo.answer.mapper.AnswerMapper;
import team001_be.stackoverflowCloneDemo.comment.mapper.QuestionCommentMapper;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPatchDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionPostDto;
import team001_be.stackoverflowCloneDemo.question.dto.QuestionSimpleResponseDto;
import team001_be.stackoverflowCloneDemo.question.entity.Question;
import team001_be.stackoverflowCloneDemo.question.mapper.QuestionMapper;
import team001_be.stackoverflowCloneDemo.question.service.QuestionService;
import team001_be.stackoverflowCloneDemo.response.MultiResponseDto;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;
import team001_be.stackoverflowCloneDemo.response.SuccessDeleteResponseDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerMapper answerMapper;
    private final QuestionCommentMapper questionCommentMapper;
    private final AnswerCommentMapper answerCommentMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerMapper answerMapper, QuestionCommentMapper questionCommentMapper, AnswerCommentMapper answerCommentMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerMapper = answerMapper;
        this.questionCommentMapper = questionCommentMapper;
        this.answerCommentMapper = answerCommentMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto), questionPostDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto), questionPatchDto.getUserId());

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question))
                , HttpStatus.OK);
    }


    //????????? ????????? ???????????? ??????
    @GetMapping("/simple/{question-id}")
    public ResponseEntity getQuestionSimple(@PathVariable("question-id") @Positive Long questionId){
    
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionSimpleResponseDto(question))
                , HttpStatus.OK);
    }

    //?????? ????????? ?????? ??? ???????????? ??????(??????, ?????? ??????, ??????, ?????? ??????)
    //?????? ?????? ??????, ?????? ?????? ?????? ??????
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId,
                HttpServletRequest req, HttpServletResponse res){

        Question question = questionService.findQuestion(questionId);
        questionService.updateQuestionViewCount(question, question.getViewCount());


        javax.servlet.http.Cookie[] cookies = req.getCookies();
        Map<String, String> mapCookie = new HashMap<String, String>();

        if (req.getCookies() != null) {
            for (javax.servlet.http.Cookie obj : cookies) {
                mapCookie.put(obj.getName(), obj.getValue());
            }
        }
        String readCount = (mapCookie.get("read_count"));
        String newReadCount = ("|" + questionId);

        if (readCount != null) {
            if (readCount.contains(newReadCount)) {
                javax.servlet.http.Cookie cookieSample =
                        new javax.servlet.http.Cookie("read_count", readCount + newReadCount);
                cookieSample.setMaxAge(1000);
                res.addCookie(cookieSample);
                questionService.updateQuestionViewCount(question, question.getViewCount()); //??????

            }
        }
        List<AnswerCommentResponseDto> answerCommentResponseDtoList = new ArrayList<>();
        List<AnswerCommentResponseDto> tmp;
        List<Answer> answerList = question.getAnswerList();
        for(Answer answer : answerList){
            tmp = answerCommentMapper.answerCommentToCommentResponseDtos(answer.getAnswerCommentList());
            answerCommentResponseDtoList.addAll(tmp);
        }

        return new ResponseEntity<>(
                new MultiResponseDto(questionMapper.questionToQuestionSimpleResponseDto(question),
                        answerMapper.answerToAnswerResponseDtos(question.getAnswerList()),
                questionCommentMapper.questionCommentToCommentResponseDtos(question.getQuestionCommentList()),
                        answerCommentResponseDtoList), HttpStatus.OK);
    }

    //?????? ?????? ??????(????????? ?????? ?????????)
    @GetMapping("")
    public ResponseEntity getAllQuestions(){
        List<Question> questionList = questionService.getAllQuestions();

        return new ResponseEntity<>(questionMapper.questionListToQuestionSimpleResponseDtos(questionList),
                HttpStatus.OK);
    }

    //"searchTitle"??? ????????? ????????? ?????? ??????
    //??????. ????????? ???????????? ???????????? ?????????. ?????? ???????????? ???????????? ??????????????? ?????? ??????
    @GetMapping("/search")
    public ResponseEntity getQuestionsBySearchTitle(@RequestParam String searchTitle){
        System.out.println("?????????: " + searchTitle);
        List<Question> questionList = questionService.searchQuestionsByTitle(searchTitle);
        System.out.println("????????? ?????? ???" + questionList.size());


        return new ResponseEntity<>(questionMapper.questionListToQuestionSimpleResponseDtos(questionList),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId,
                                         @Positive @RequestParam Long userId) {
        questionService.deleteQuestion(questionId, userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @PostMapping(value = "/upvote/{question-id}")
    public ResponseEntity setUpVote(@PathVariable("question-id") @Positive Long questionId,
                                  @Positive @RequestParam Long userId){
        questionService.setUpVote(questionId, userId);


        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId))
                , HttpStatus.OK);
    }

    @PostMapping("/downvote/{question-id}")
    public ResponseEntity setDownVote(@PathVariable("question-id") @Positive Long questionId,
                                    @Positive @RequestParam Long userId){
        questionService.setDownVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId))
                , HttpStatus.OK);
    }



}
