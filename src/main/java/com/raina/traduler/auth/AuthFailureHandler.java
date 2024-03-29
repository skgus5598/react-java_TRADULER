/*
package com.raina.traduler.auth;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AuthFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {

        String msg = "Invalid Email or Password";

        // exception 관련 메세지 처리
        if (exception instanceof DisabledException) {
            msg = "DisabledException account";
        } else if (exception instanceof CredentialsExpiredException) {
            msg = "CredentialsExpiredException account";
        } else if (exception instanceof BadCredentialsException) {
            msg = "BadCredentialsException account";
        }

        setDefaultFailureUrl("/member/login?error=true&exception=" + msg);

        super.onAuthenticationFailure(request, response, exception);
    }
}
 */
