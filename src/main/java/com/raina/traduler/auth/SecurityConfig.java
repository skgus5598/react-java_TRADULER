
package com.raina.traduler.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig implements WebMvcConfigurer {


   /*
    private final AuthSucessHandler authSucessHandler;
    private final AuthFailureHandler authFailureHandler;


    @Bean
    public UserDetailsService userDetailsService(){
        return new UserDetailService();
    }
    */
    @Bean
    public BCryptPasswordEncoder encodePassword() {  // 회원가입 시 비밀번호 암호화에 사용할 Encoder 빈 등록
        return new BCryptPasswordEncoder();
    }


    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
         http
                 .csrf().disable()
                 .authorizeHttpRequests()
                 .requestMatchers("/css/**","/images/**","/js/**","/user/**","/**").permitAll();
                // .anyRequest().authenticated()
              //   .and()
              //   .formLogin()
              //   .loginPage("/login")
              //   .loginProcessingUrl("/user/login") //form action
              //   .successHandler(authSucessHandler)
              //   .failureHandler(authFailureHandler);
        return http.build();
    }




    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**") // cors를 적용할 spring서버의 url 패턴.
                .allowedOrigins("*") // cors를 허용할 도메인. 제한을 모두 해제하려면 "**"
                //.allowedMethods("GET","POST","PUT") // cors를 허용할 method
                .allowedMethods("*")
                .allowedHeaders("*");
                //.allowCredentials(true);
    }
}

