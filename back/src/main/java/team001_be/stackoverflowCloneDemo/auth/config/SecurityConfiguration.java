package team001_be.stackoverflowCloneDemo.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import team001_be.stackoverflowCloneDemo.auth.handler.UserAuthenticationFailureHandler;
import team001_be.stackoverflowCloneDemo.auth.jwt.JwtTokenizer;
import team001_be.stackoverflowCloneDemo.auth.utils.CustomAuthorityUtils;
import team001_be.stackoverflowCloneDemo.filter.JwtAuthenticationFilter;
import org.springframework.security.authentication.AuthenticationManager;
import team001_be.stackoverflowCloneDemo.filter.JwtAuthorizationFilter;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

//@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;

    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .cors(withDefaults())
                .csrf().disable() //csrf 공격 설정 비활성화
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //토큰 기반 인증이라 세션 사용 X
                .and()
                .formLogin().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));   // 모든 출처(Origin)에 대해 스크립트 기반의 HTTP 통신을 허용하도록 설정한다
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));  // 파라미터로 지정한 HTTP Method에 대한 HTTP 통신을 허용한다.

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();   //  CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체를 생성한다.
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtAuthorizationFilter jwtAuthorizationFilter = new JwtAuthorizationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtAuthorizationFilter, JwtAuthenticationFilter.class); //인증 과정 후에 인가과정 수행되도록 하기
        }
    }
}