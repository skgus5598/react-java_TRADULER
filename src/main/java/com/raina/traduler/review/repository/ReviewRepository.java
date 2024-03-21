package com.raina.traduler.review.repository;

import com.raina.traduler.review.dto.ReviewRequest;
import com.raina.traduler.review.entity.ReviewEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer> {

    List<ReviewEntity> findAllByThemeListOrderByReviewIdDesc(ThemeListEntity themeList);
}
