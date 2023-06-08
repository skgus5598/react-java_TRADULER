package com.raina.traduler.user.dto;

import com.raina.traduler.user.entity.UserEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class UserRequest {

    private String userId;
    private String userPwd;
    private String userEmail;

    public UserEntity toEntity() {
        return UserEntity.builder()
                .userId(userId)
                .userEmail(userEmail)
                .userPwd(userPwd)
                .build();
    }
}
