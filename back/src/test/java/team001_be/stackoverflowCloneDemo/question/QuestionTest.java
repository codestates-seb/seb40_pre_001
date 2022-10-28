package team001_be.stackoverflowCloneDemo.question;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import team001_be.stackoverflowCloneDemo.question.entity.Question;


public class QuestionTest {
    @DisplayName("Question 단위 테스트")
    @Test
    public void test1(){
        String title = "@builder 선언 위치 관련 질문";
        String context = "@builder를 클래스에 선언하는 것에 비해 생성자로 선언하는 것의 이점은 무엇인가요?";

        Question q1 = Question.builder().uerId(3)
                .questionTitle(title)
                .context(context).build();

        assertEquals(q1.getQuestionTitle(), title);
        assertEquals(q1.getContext(), context);
    }


}
