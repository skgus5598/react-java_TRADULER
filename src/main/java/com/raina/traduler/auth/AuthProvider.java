/*
package com.raina.traduler.auth;

import com.raina.traduler.user.entity.UserEntity;
import com.raina.traduler.user.service.UserServiceImpl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthProvider implements AuthenticationProvider {

    private final UserServiceImpl userService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        System.out.println("here???????????????");
       String userId = authentication.getName();
       String userPassword = authentication.getCredentials().toString();
        System.out.println("userid::" + userId + "/ userpassword : " + userPassword);

       UserEntity user = (UserEntity)userService.loadUserByUsername(userId);
        System.out.println("authenticate ::::: " + user.toString());
       if(!user.getPassword().equals(userPassword)) throw new BadCredentialsException("password incorrect");
       return new UserToken(userId, userPassword, user);

    }
    @Override
    public boolean supports(Class<?> authentication) {
        return false;
    }

    public class UserToken extends UsernamePasswordAuthenticationToken{
        private static final long serialVersionUID = 1L;

        @Getter@Setter
        UserEntity user;

        public UserToken(Object principal, Object credentials, UserEntity user ){
            super(principal, credentials);
            this.user = user;
            //principal : userId
            //credeential : password;
        }
        public Object getDetails(){
            return user;
        }


    }
}
*/
