package com.raina.traduler.user.controller;


import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.dto.UserResponse;
import com.raina.traduler.user.entity.UserEntity;
import com.raina.traduler.user.repository.UserRepository;
import com.raina.traduler.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Optional;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;
   // private final JwtConfig jwtConfig;

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


    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserRequest request){
        log.info("toString : " + request.toString());
        return new ResponseEntity(userService.login(request), HttpStatus.OK);
    }

/*
    @GetMapping("/loginTest")
    public String login(UserRequest userRequest){
        UserEntity user = userRepository.findByUserIdAndUserPwd(userRequest.getUserId(), userRequest.getUserPwd());
        log.info("user : " + user.toString());
        return jwtConfig.createToken(user.getUserId(), user.getAuthorities());
       // log.info("loginTest examuser : " + user.getId()+ " / " + user.getPassword());
       // log.info("toString : " + request.toString());
       // return new ResponseEntity(request.toEntity(), HttpStatus.OK);
       // return new ResponseEntity( HttpStatus.OK);
    }

 */

}
