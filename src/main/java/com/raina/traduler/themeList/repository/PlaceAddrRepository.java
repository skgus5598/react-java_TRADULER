package com.raina.traduler.themeList.repository;

import com.raina.traduler.themeList.entity.PlaceAddrEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceAddrRepository extends JpaRepository<PlaceAddrEntity, String> {
}
