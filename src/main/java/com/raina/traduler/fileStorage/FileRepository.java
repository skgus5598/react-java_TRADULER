package com.raina.traduler.fileStorage;

import com.raina.traduler.themeList.entity.ThemeListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FileRepository extends JpaRepository<FileEntity, String> {

    FileEntity findByOriginalFileName(String fileName);

    // FindBy FK --> findBy+ EntityName + _fk
    List<FileEntity> findAllByThemeList_PlaceId(Long placeId);


}
