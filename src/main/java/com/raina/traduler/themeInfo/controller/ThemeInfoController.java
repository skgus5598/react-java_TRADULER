package com.raina.traduler.themeInfo.controller;

import com.raina.traduler.themeInfo.dto.ThemeInfoResponse;
import com.raina.traduler.themeInfo.repository.ThemeInfoRepo;
import com.raina.traduler.themeInfo.service.ThemeInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class ThemeInfoController {

    private final ThemeInfoRepo repository;
    private final ThemeInfoService service;

    @GetMapping("main")
    public List<ThemeInfoResponse> themeInfoList(){
        return service.themeInfoList();
    }
}
