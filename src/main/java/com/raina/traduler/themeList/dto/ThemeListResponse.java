package com.raina.traduler.themeList.dto;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.Address;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class ThemeListResponse {

    /*ThemeListEntity*/
    private Long placeId;
    private String placeName;
    private String contentIntro;
    private String contentMain;
    private String themeName;

    private List<String> files;

    /*Addr*/
    private String placeAddr;
    private int latitude;
    private int longitude;




    public ThemeListResponse(ThemeListEntity tlEntity){
        this.placeId = tlEntity.getPlaceId();
        this.placeName = tlEntity.getPlaceName();
        this.contentIntro = tlEntity.getContentIntro();
        this.contentMain = tlEntity.getContentMain();
        this.themeName = tlEntity.getTheme().getThemeName();
        this.files = tlEntity.getFiles().stream().map(FileEntity::getOriginalFileName).collect(Collectors.toList());//파일 이름만
        this.placeAddr = tlEntity.getPlaceAddress().getPlaceAddr();
        this.latitude = tlEntity.getPlaceAddress().getLatitude();
        this.longitude = tlEntity.getPlaceAddress().getLongitude();
    }





}
