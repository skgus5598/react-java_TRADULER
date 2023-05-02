package com.raina.traduler.themeList.service;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.fileStorage.FileHandler;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import com.raina.traduler.themeList.repository.ThemeListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ThemeListServiceImpl implements ThemeListService{

    private final ThemeListRepository themeRepo;
    private final FileRepository fileRepo;
    private final FileHandler fileHandler;

    @Override
    public List<ThemeListResponse> getThemeList(ThemeListRequest requestDto) {
        List<ThemeListEntity> entityList = themeRepo.findAllByTheme(requestDto.getTheme());
        List<ThemeListResponse> responseList = new ArrayList<>();
        entityList.forEach( e -> {
            responseList.add(new ThemeListResponse(e));
        });
        return responseList;
    }

    @Override
    public ThemeListResponse addPlace(ThemeListRequest requestDto) throws Exception {
        ThemeListEntity themeEntity = themeRepo.save(requestDto.toThemeListEntity()) ;


        List<FileEntity> fileList = fileHandler.saveFile(requestDto.getFiles());
        for(FileEntity file : fileList){
            themeEntity.addFile(file);
            fileRepo.save(file); // DB에 파일 이름 바꿔서 넣어줄 필요 있음. 계속 중복으로 들어가서 update쳐짐 
        }
        return new ThemeListResponse(themeEntity);

    }
}
