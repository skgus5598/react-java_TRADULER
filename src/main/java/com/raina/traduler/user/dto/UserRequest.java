package com.raina.traduler.user.dto;

import com.raina.traduler.user.entity.UserEntity;
import lombok.Builder;
import lombok.Getter;

@Getter
public class UserRequest {

    public String userId;
    public String userPwd;
    public String userEmail;

    public UserEntity toEntity() {
        return UserEntity.builder()
                .userId(userId)
                .userEmail(userEmail)
                .userPwd(userPwd)
                .build();
    }
}
