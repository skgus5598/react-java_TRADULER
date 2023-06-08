package com.raina.traduler.user.dto;

import com.raina.traduler.user.entity.UserEntity;
import lombok.Getter;

@Getter
public class UserResponse {

    private String userId;
    private String userEmail;

    public UserResponse(UserEntity userEntity){
        this.userId = userEntity.getUserId();
        this.userEmail = userEntity.getUserEmail();
    }

}
