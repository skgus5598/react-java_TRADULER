package com.raina.traduler.themeList.repository;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThemeListRepository extends JpaRepository<ThemeListEntity, Integer> {

    List<ThemeListEntity> findAllByTheme(ThemeInfoEntity theme);
}
