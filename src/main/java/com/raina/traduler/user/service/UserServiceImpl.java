package com.raina.traduler.user.service;

import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.dto.UserResponse;
import com.raina.traduler.user.entity.UserEntity;
import com.raina.traduler.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository repository;

    @Override
    public Boolean registerUser(String inputId) {
        Boolean bool = repository.existsByUserId(inputId);
        if(bool){ // exists
            return false;
        }else{
            return true;
        }

    }
}
