package com.raina.traduler.user.service;

import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.dto.UserResponse;

public interface UserService {
    Boolean checkId(String inputId);

    UserResponse registerUser(UserRequest request);

    int login(UserRequest request);

}
