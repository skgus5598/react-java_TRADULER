package com.raina.traduler.themeList.dto;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.PlaceAddrEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class ThemeListResponse {

    /*ThemeListEntity*/
    private String placeName;
    private String contentIntro;
    private String contentMain;
    private String themeName;

    private List<String> files;

    /*PlaceAddrEntity*/
    private String placeAddr;
    private int latitude;
    private int longitude;




    public ThemeListResponse(ThemeListEntity tlEntity, PlaceAddrEntity paEntity){
        this.placeName = tlEntity.getPlaceName();
        this.contentIntro = tlEntity.getContentIntro();
        this.contentMain = tlEntity.getContentMain();
        this.themeName = tlEntity.getThemeName();
        this.files = tlEntity.getFiles().stream().map(FileEntity::getFileName).collect(Collectors.toList());//파일 이름만
        this.placeAddr = paEntity.getPlaceAddr();
        this.latitude = paEntity.getLatitude();
        this.longitude = paEntity.getLongitude();
    }



}
