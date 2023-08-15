package com.raina.traduler.themeList.dto;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.Address;
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
    private ThemeInfoEntity theme;

    /*Address*/
    private String placeAddr;
    private String latitude;
    private String longitude;

    /*FileEntity*/
    private List<MultipartFile> files;

    // dto => entity
    public ThemeListEntity toThemeListEntity(){
        return ThemeListEntity.builder()
                .placeName(placeName)
                .contentIntro(contentIntro)
                .contentMain(contentMain)
                .theme(theme)
                .placeAddress(new Address(placeAddr, latitude, longitude))
                .build();
    }


}
