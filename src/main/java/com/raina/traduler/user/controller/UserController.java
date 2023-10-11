package com.raina.traduler.user.controller;

import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.dto.UserResponse;
import com.raina.traduler.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    //dto형태로 받아올때 @RequestBody로..
    @PostMapping("/checkId")
    public ResponseEntity<Boolean> checkId(@RequestBody UserRequest request){
        return new ResponseEntity(userService.checkId(request.getUserId()),HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody UserRequest request){
        log.info("toString :: " + request.toString());
        return new ResponseEntity(userService.registerUser(request), HttpStatus.OK);
    }

/*
    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserRequest request){
        log.info("toString : " + request.toString());
        return new ResponseEntity(userService.login(request), HttpStatus.OK);
    }

*/
    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@AuthenticationPrincipal UserRequest request){
        log.info("toString : " + request.toString());
        return new ResponseEntity(request.toEntity(), HttpStatus.OK);
    }

}
