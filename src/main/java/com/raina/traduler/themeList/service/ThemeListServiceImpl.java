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
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ThemeListServiceImpl implements ThemeListService{

    private final ThemeListRepository themeRepo;
    private final FileRepository fileRepo;
    private final FileHandler fileHandler;

    @Override
    public List<ThemeListResponse> getThemeList(ThemeListRequest requestDto) {
        List<ThemeListResponse> entityList = themeRepo.findAllByThemeQuery(requestDto.getTheme().getThemeName());
        List<ThemeListResponse> responseList = new ArrayList<>();

//        entityList.forEach( e -> {
//            responseList.add(new ThemeListResponse(e));
//        });

        //React.js에선 취약점을 완전히 차단하기 위해 무조건 텍스트 형태로만 렌더링하도록 설정되어 있다고 함
        //불러올 때 React에서 \n처리 안해줌. 여기서 replace 할 필요 없다는 말


       return entityList;
    }

    @Override
    public ThemeListResponse addPlace(ThemeListRequest requestDto) throws Exception {

        /*
            contentmain => blank(""), change Line("/br") processing
         */
        String contentOrigin = requestDto.getContentMain();
        String contentModi = contentOrigin.replace("\r\n","<br>");
        log.info("modified content : " + contentModi );

        requestDto.setContentMain(contentModi);

        ThemeListEntity themeEntity = themeRepo.save(requestDto.toThemeListEntity()) ;
        List<FileEntity> fileList = fileHandler.saveFile(requestDto.getFiles(), "admin", 0);
        for(FileEntity file : fileList){
            themeEntity.addFile(file);
            fileRepo.save(file); // DB에 파일 이름 바꿔서 넣어줄 필요 있음. 계속 중복으로 들어가서 update쳐짐 
        }
        return new ThemeListResponse(themeEntity);

    }

    @Override
    public void deleteContent(Long placeId) {

        List<FileEntity> fileEntities = fileRepo.findAllByThemeList_PlaceId(placeId);

        // delete files from local repository
        fileHandler.deleteImages(fileEntities, "admin");

        themeRepo.deleteById(placeId);

    }
}
