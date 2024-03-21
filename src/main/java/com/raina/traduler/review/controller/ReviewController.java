package com.raina.traduler.review.controller;


import com.raina.traduler.fileStorage.FileHandler;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.review.dto.ReviewRequest;
import com.raina.traduler.review.dto.ReviewResponse;
import com.raina.traduler.review.service.ReviewService;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequiredArgsConstructor
@RestController
public class ReviewController {

    private final ReviewService service;
    private final FileRepository fileRepo;
    private final FileHandler fileHandler;

    @GetMapping("/getReviews")
    public List<ReviewResponse> getReviews(ReviewRequest requestDto){
        System.out.println("requestdto : " + requestDto.getThemeList());
        return service.getReviews(requestDto);
    }

    @PostMapping("/addReview")
    public ResponseEntity<ReviewResponse> addReview(ReviewRequest requestDto) throws Exception{
        return new ResponseEntity(service.addReview(requestDto), HttpStatus.OK);
    }

}
