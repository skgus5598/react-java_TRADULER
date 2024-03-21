package com.raina.traduler.themeList.controller;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.fileStorage.FileHandler;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import com.raina.traduler.themeList.service.ThemeListService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
@RequiredArgsConstructor
@RestController
public class ThemeListController {

    private final ResourceLoader resourceLoader;

    private final ThemeListService service;

    private final FileRepository fileRepo;
    private final FileHandler fileHandler;


    @GetMapping("/themeList")
    public List<ThemeListResponse> getThemeList(ThemeListRequest requestDto){
        System.out.println("themeName ?? " + requestDto.getTheme());
        return service.getThemeList(requestDto);
    }


    @PostMapping("/addPlace")
    public ResponseEntity<ThemeListResponse> addPlace(ThemeListRequest requestDto) throws Exception {

        System.out.println("requestDto :: " + requestDto.toString());

        return new ResponseEntity(service.addPlace(requestDto), HttpStatus.OK);
    }

    @GetMapping("/readImages/{type}/{fileName}")
    public void readImages(@PathVariable String type, @PathVariable String fileName, HttpServletResponse response) throws IOException {
        System.out.println("type? " + type);
        fileHandler.readImages(type, fileName, response, fileRepo.findByOriginalFileName(fileName) );
    }

    @DeleteMapping("/deleteContent/{placeId}")
    public void deleteContent(@PathVariable Long placeId){
        System.out.println("delete Content : " + placeId);
        service.deleteContent(placeId);
    }
}
