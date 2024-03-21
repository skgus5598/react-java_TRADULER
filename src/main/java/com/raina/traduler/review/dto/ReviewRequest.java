package com.raina.traduler.review.dto;


import com.raina.traduler.review.entity.ReviewEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewRequest {

    private ThemeListEntity themeList;
    private String userId;
    private String content;

    //FileEntity
    private List<MultipartFile> files;

    // dto => entity
    public ReviewEntity toReviewEntity(){
        return ReviewEntity.builder()
                .themeList(themeList)
                .userId(userId)
                .content(content)
                .regDate(LocalDateTime.now())
                .build();
    }
}
