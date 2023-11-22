/*
package com.raina.traduler.auth;

import com.raina.traduler.user.repository.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@RequiredArgsConstructor
@Component
public class AuthSucessHandler implements AuthenticationSuccessHandler{ //SimpleUrlAuthenticationSuccessHandler {

    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
      //  userRepository.updateMemberLastLogin(authentication.getName());
        System.out.println("here success");
        System.out.println("getsession : " + request.getSession());
        System.out.println("authentication1 : " + authentication.getPrincipal());
        System.out.println("authentication2 : " + authentication.isAuthenticated());
        System.out.println("authentication3 : " + authentication.getDetails());

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.sendRedirect("/user/loginTest");
        //setDefaultTargetUrl("/user/loginTest");
        //super.onAuthenticationSuccess(request, response, authentication);
    }
}
*/
