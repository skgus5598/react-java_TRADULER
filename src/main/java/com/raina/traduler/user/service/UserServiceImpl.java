package com.raina.traduler.user.service;

import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.dto.UserResponse;
import com.raina.traduler.user.entity.UserEntity;
import com.raina.traduler.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public Boolean checkId(String inputId) {
        Boolean bool = repository.existsByUserId(inputId);
        if(bool){ // exists
            return false;
        }else{
            return true;
        }

    }

    @Override
    public UserResponse registerUser(UserRequest request) {
        request.setUserPwd(passwordEncoder.encode(request.getUserPwd()));
        UserEntity entity = repository.save(request.toEntity());
        System.out.println("entity?????" + entity.getPassword());
        return new UserResponse(entity);
    }


/*
    @Override
    public int login(UserRequest request) {
        Optional<UserEntity> userEntity =  repository.findByUserId(request.getUserId());

        if(!userEntity.isPresent()){
            //유저가 존재하지 않을 때
            return 1;
        }else{
            // 비밀번호 틀렸을 때
            if(! userEntity.get().getUserPwd().equals(request.getUserPwd())){
                  return 2;
            }else{
                // 로그인 성공
                return 3;
            }
        }
    }
    */

}
