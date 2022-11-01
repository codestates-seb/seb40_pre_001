package team001_be.stackoverflowCloneDemo.auth.handler;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import org.springframework.security.core.AuthenticationException;
import team001_be.stackoverflowCloneDemo.question.mapper.response.ErrorResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationFailureHandler  implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        // 인증 실패 시, 에러 로그를 기록하거나 error response를 전송할 수 있다.
        log.error("# Authentication failed: {}", exception.getMessage());

        sendErrorResponse(response);
    }
//실패할 때 보내는 에러메세지 메서드
    private void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson(); //Error 정보가 담긴 객체를 JSON문자열로 변환하는 라이브러리 인스턴스 생성
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED); // ErrorResponse 객체 생성후 ErrorResponse.of메서드로 http상태코드 전달
        response.setContentType(MediaType.APPLICATION_JSON_VALUE); // response의 Content Type이 “application/json” 이라는 것을 클라이언트에게 알려준다.
        response.setStatus(HttpStatus.UNAUTHORIZED.value()); // response의 status가 401임을 클라이언트에게 알려준다
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class)); // Gson을 이용해 ErrorResponse 객체를 JSON 포맷 문자열로 변환 후, 출력 스트림을 생성
    }
}
