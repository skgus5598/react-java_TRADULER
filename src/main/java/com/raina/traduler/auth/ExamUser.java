/*
package com.raina.traduler.auth;

import com.raina.traduler.user.entity.UserEntity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

@Getter
@Setter
public class ExamUser extends User {
    String id;
    String password;

    public ExamUser(UserEntity user, java.util.Collection<? extends GrantedAuthority> authorities){
        super(user.getUsername(), user.getPassword(), authorities);
        this.id = user.getUserId();
        this.password = user.getPassword();
    }
}
*/