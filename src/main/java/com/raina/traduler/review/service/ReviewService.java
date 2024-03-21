package com.raina.traduler.review.service;

import com.raina.traduler.review.dto.ReviewRequest;
import com.raina.traduler.review.dto.ReviewResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ReviewService {

    public List<ReviewResponse> getReviews(ReviewRequest requestDto);
    public ReviewResponse addReview(ReviewRequest requestDto);

}
