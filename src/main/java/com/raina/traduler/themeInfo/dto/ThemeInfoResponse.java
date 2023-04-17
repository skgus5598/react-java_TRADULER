package com.raina.traduler.themeInfo.dto;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ThemeInfoResponse {

    private String themeName;
    private String themeIntro;

    // Entity -> Responsedto로 담아주는 생성자
    public ThemeInfoResponse(ThemeInfoEntity entity){
        this.themeName = entity.getThemeName();
        this.themeIntro = entity.getThemeIntro();
    }
}
