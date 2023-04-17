package com.raina.traduler.themeInfo.repository;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemeInfoRepo extends JpaRepository<ThemeInfoEntity, String > {
}
