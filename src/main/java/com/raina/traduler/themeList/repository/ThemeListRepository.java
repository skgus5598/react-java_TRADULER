package com.raina.traduler.themeList.repository;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ThemeListRepository extends JpaRepository<ThemeListEntity, Long> {

    List<ThemeListEntity> findAllByTheme(ThemeInfoEntity theme);
//    @Query(value = "SELECT p FROM THEME_LIST p LEFT JOIN FILE_STORAGE f ON f.themeList.theme = :#{#theme.themeName} WHERE f.reviewId = 0")
    @Query(value = "SELECT p FROM THEME_LIST p " +
            "       LEFT JOIN FILE_STORAGE f ON f.themeList.placeId = p.placeId " +
            "       WHERE p.theme.themeName = :theme " +
            "       AND f.reviewId = 0")
    List<ThemeListResponse> findAllByThemeQuery(@Param("themeName") String theme);
}
