package com.raina.traduler.themeList.service;


import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ThemeListService {

    public List<ThemeListResponse> getThemeList(ThemeListRequest requestDto) ;
    public ThemeListResponse addPlace(ThemeListRequest requestDto) throws Exception;

}
