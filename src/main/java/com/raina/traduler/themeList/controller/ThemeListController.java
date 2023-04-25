package com.raina.traduler.themeList.controller;

import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.service.ThemeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class ThemeListController {

    private final ThemeListService service;

    @PostMapping("/addPlace")
    public ResponseEntity<ThemeListResponse> addPlace(ThemeListRequest requestDto) throws Exception {

        System.out.println("requestDto :: " + requestDto.toString());

        return new ResponseEntity(service.addPlace(requestDto), HttpStatus.OK);
    }
}
