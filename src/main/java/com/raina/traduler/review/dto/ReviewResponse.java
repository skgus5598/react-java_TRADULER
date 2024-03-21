package com.raina.traduler.review.dto;

import com.raina.traduler.review.entity.ReviewEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
public class ReviewResponse {

    private long placeId;
    private String userId;
    private String content;
    private LocalDateTime regDate;

    private List<String> files;

    public ReviewResponse(ReviewEntity entity){
        this.placeId = entity.getThemeList().getPlaceId();
        this.userId = entity.getUserId();
        this.content = entity.getContent();
        this.regDate = entity.getRegDate();
    }
}
