package com.raina.traduler.fileStorage;

import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<FileEntity, String> {

    List<FileEntity> findAllByThemeList(ThemeListEntity themeList);
    List<FileEntity>  findByThemeList(ThemeListEntity themeList);
}
