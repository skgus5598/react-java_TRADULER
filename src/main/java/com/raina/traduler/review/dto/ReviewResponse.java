package com.raina.traduler.review.dto;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.review.entity.ReviewEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
        this.files = entity.getFiles().stream().map(FileEntity::getOriginalFileName).collect(Collectors.toList());

    }
}
