package com.raina.traduler.themeList.controller;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.dto.ThemeListRequest;
import com.raina.traduler.themeList.dto.ThemeListResponse;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import com.raina.traduler.themeList.service.ThemeListService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class ThemeListController {

    private final ResourceLoader resourceLoader;

    private final ThemeListService service;

    private final FileRepository fileRepo;


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
    @GetMapping("/readImages")
    public ResponseEntity<Resource> getImage(@RequestParam ThemeListEntity themeList) throws IOException {
        System.out.println("themeList ::: " + themeList.getPlaceId());
        //List<FileEntity> images  = fileRepo.findAllByPlaceId(placeId);
        List<FileEntity>  image = fileRepo.findByThemeList(themeList);
        String fullPath = image.get(0).getFilePath()+image.get(0).getSavedFileName();
        MediaType mediaType = MediaType.parseMediaType(Files.probeContentType(Paths.get(fullPath)));
        UrlResource resource = new UrlResource("file:"+fullPath);
        String contentDisposition = "attachment; filename=\"" + image.get(0).getOriginalFileName() + "\"";
        System.out.println("contentdisposition :: " + contentDisposition);
        System.out.println("resource :: " + resource.toString());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mediaType);
        headers.setContentDisposition(ContentDisposition.parse(contentDisposition));
        return new ResponseEntity<Resource>(resource, headers, HttpStatus.OK);
 /*       return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, mediaType.toString())
             //   .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition)
                .body(resource);
 */   }

   /* @GetMapping(value = "/readImages")
    public List<Image> getImageList(int placeId ) throws Exception {
        System.out.println("files :: " + files);
        Resource resource = resourceLoader.getResource("/Users/raina/Desktop/traduler_react/img_repo/"+ files);
        System.out.println("resource? " + resource);
        File[] filesA = resource.getFile().listFiles((dir, name) -> !name.equals(".DS_Store")); // 맥OS에서 발생하는 임시 파일 예외처리
        return Arrays.stream(filesA).map( file -> {
            byte[] data = null;
            try{
                data = Files.readAllBytes(file.toPath());
            } catch (IOException e) {
                e.printStackTrace();
            }
            return new Image(file.getName(), data);
        }).collect(Collectors.toList());
    }
*/
    private static class Image{
        private String name;
        private byte[] data;

        public Image(String name, byte[] data){
            this.name = name;
            this.data = data;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public byte[] getData() {
            return data;
        }

        public void setData(byte[] data) {
            this.data = data;
        }
    }
}
