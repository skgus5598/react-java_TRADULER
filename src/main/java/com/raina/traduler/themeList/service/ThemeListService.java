package com.raina.traduler.themeList.service;


import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import org.springframework.http.ResponseEntity;

public interface ThemeListService {

    public ThemeListResponse addPlace(ThemeListRequest requestDto) throws Exception;
}
