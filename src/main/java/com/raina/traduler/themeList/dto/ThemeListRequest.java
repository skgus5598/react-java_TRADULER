package com.raina.traduler.themeList.dto;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.PlaceAddrEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ThemeListRequest {

    /*ThemeListEntity*/
    private String placeName;
    private String contentIntro;
    private String contentMain;
    private String themeName;

    /*PlaceAddrEntity*/
    private String placeAddr;
    private int latitude;
    private int longitude;

    /*FileEntity*/
    private List<MultipartFile> files;

    // dto => entity
    public ThemeListEntity toThemeListEntity(){
        return ThemeListEntity.builder()
                .placeName(placeName)
                .contentIntro(contentIntro)
                .contentMain(contentMain)
                .themeName(themeName)
                .build();
    }

    public PlaceAddrEntity toPlaceAddrEntity(){
        return PlaceAddrEntity.builder()
                .placeAddr(placeAddr)
                .latitude(latitude)
                .longitude(longitude)
                .build();
    }

    // fileEntity는 파일 프로세스 완료 후 서비스단에서 직접 만들기.


}
