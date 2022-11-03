package team001_be.stackoverflowCloneDemo.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.security.core.AuthenticationException;
import team001_be.stackoverflowCloneDemo.auth.utils.ErrorResponder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
@Component
public class UserAuthenticationEntryPoint implements AuthenticationEntryPoint{
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authenticationException) throws IOException, ServletException{
        Exception exception = (Exception) request.getAttribute("exception");
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);

        logExceptionMessage(authenticationException, exception);
    }
    private void logExceptionMessage(AuthenticationException authenticationException, Exception exception){
        String message = exception  != null ? exception.getMessage() : authenticationException.getMessage();
        log.warn("unauthorized error happened", message);

    }
}
