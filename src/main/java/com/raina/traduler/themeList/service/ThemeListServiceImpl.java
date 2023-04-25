package com.raina.traduler.themeList.service;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.fileStorage.FileHandler;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.entity.PlaceAddrEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import com.raina.traduler.themeList.repository.PlaceAddrRepository;
import com.raina.traduler.themeList.repository.ThemeListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ThemeListServiceImpl implements ThemeListService{

    private final ThemeListRepository themeRepo;
    private final PlaceAddrRepository placeRepo;
    private final FileRepository fileRepo;
    private final FileHandler fileHandler;

    @Override
    public ThemeListResponse addPlace(ThemeListRequest requestDto) throws Exception {
        ThemeListEntity themeEntity = themeRepo.save(requestDto.toThemeListEntity()) ;
        PlaceAddrEntity placeEntity =  placeRepo.save(requestDto.toPlaceAddrEntity());

     //   themeEntity.setPlace(placeEntity);
        placeEntity.setThemeList(themeEntity);

        List<FileEntity> fileList = fileHandler.saveFile(requestDto.getFiles());
        for(FileEntity file : fileList){
            themeEntity.addFile(file);
            fileRepo.save(file);
        }
        return new ThemeListResponse(themeEntity, placeEntity);

    }
}
