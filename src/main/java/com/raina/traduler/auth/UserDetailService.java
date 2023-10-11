package com.raina.traduler.auth;

import com.raina.traduler.user.entity.UserEntity;
import com.raina.traduler.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.HashSet;
import java.util.Set;

@Slf4j
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("*****userserviceimple loaduserbyusername : " + username);
        UserEntity user = repository.findByUserId(username)
                .orElseThrow(() -> new UsernameNotFoundException("couldn't find user " + username));
        log.info("user? " + user.getUsername() +  "/ " + user.getPassword());
        ExamUser examUser = new ExamUser(user, buildAdminAuthority());
        log.info("examuser ??" + examUser.id +"/" + examUser.password +"/" + examUser.getAuthorities());
        return examUser;
    }

    private Set<GrantedAuthority> buildAdminAuthority(){
        Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
        setAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
        log.info("ROLE USERE :::" + setAuths);
        return setAuths;
    }

}
