package com.raina.traduler.review.entity;

import com.raina.traduler.themeList.entity.ThemeListEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "place_review")
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reviewId;

    //FK
    @ManyToOne
    @JoinColumn(name = "placeId")
    private ThemeListEntity themeList;

    private String userId;

    private String content;

    private LocalDateTime regDate;




}
