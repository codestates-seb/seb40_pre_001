/*
package team001_be.stackoverflowCloneDemo.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.security.core.userdetails.UserDetailsService;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
    private String secretKey = "llshlllshlllshlllshl";
    // 토큰 유효시간 30분
    private long tokenVaildTime = 30 * 60 * 1000L;

    private final UserDetailsService userDetailsService;

    @PostConstruct //객체 초기화 후 secretKey 를 Base64로 인코딩
    protected void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    //JWT 토큰 생성
    public String createToken(String userPk, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(userPk); // JWT payload에 저장되는 정보단위
        claims.put("roles", roles);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) //토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + tokenVaildTime)) // 토큰 기한 만료 시간
                .signWith(SignatureAlgorithm.HS256, secretKey) //사용할 암호화 알고리즘, signature에 들어갈 secretKey값 세팅

                .compact();

    }

    //JWT 토큰에서 인증 정보 조회

    public Authentication getAuthentication(String token){
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    //토큰에서 회원 정보 추출

    public String getUserPk(String token){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    //Request의 Header에서 token값 가져오기 "X-AUTH-TOKEN" : "TOKEN값'
    public String resolveToken(HttpServletRequest request){
        return request.getHeader("X-AUTH-TOKEN");
    }

    // 토큰의 유효성과 만료일자 확인

    public boolean validateToken(String jwtToken){
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        }
        catch(Exception e){
            return false;
        }
    }
}
*/
