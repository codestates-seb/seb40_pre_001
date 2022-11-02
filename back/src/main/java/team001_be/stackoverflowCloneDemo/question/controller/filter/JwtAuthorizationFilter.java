package team001_be.stackoverflowCloneDemo.question.controller.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import team001_be.stackoverflowCloneDemo.auth.jwt.JwtTokenizer;
import team001_be.stackoverflowCloneDemo.auth.utils.CustomAuthorityUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtAuthorizationFilter extends OncePerRequestFilter { //Request당 한 번만 실행되는 Security Filter 구현
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtAuthorizationFilter(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }



    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException{
        try{
            Map<String,Object> claims = verifyJws(request); //JWT 검증되는데 사용되는 메서드
            setAuthenticationToContext(claims); //Authentication 객체를 Securitycontext에 저장하기위한 메서드
        } catch (SignatureException se){
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee){
            request.setAttribute("exception", ee);
        } catch (Exception e){
            request.setAttribute("exception", e);
        }
        filterChain.doFilter(request,response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization //헤더의 값이 null이거나 Bearer로 시작하지 않으면 해당 Filter동작 안함
                .startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer", ""); //header 에서 JWT 얻기
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()); //JWT 서명 검증을 위한 Secret Key 얻기
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody(); //JWT에서 Claims 파싱 -> 검증이 성공했다는 뜻

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username"); //JWT에서 파싱한 유저Id 가져오기
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List) claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
