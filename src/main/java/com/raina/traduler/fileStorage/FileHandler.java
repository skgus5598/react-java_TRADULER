package com.raina.traduler.fileStorage;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Service
public class FileHandler {

    //파일 저장 경로
    public static final String PATH = "/Users/raina/Desktop/traduler_react/img_repo/";

    public List<FileEntity> saveFile(List<MultipartFile> files) throws Exception{

        List<FileEntity> fileList = new ArrayList<>();

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String currentDate = now.format(formatter);

        File file = new File(PATH);

        for(MultipartFile multipartFile : files){
        //    String newFileName = System.nanoTime() + multipartFile.getOriginalFilename();
            //확장자 넣어주기
            String extension = StringUtils.getFilenameExtension(multipartFile.getOriginalFilename());

            String newFileName = UUID.randomUUID().toString().replaceAll("-", "")+"."+extension;

            String originFileName =  + System.nanoTime() + multipartFile.getOriginalFilename().toLowerCase();

            FileEntity fileEntity = new FileEntity(originFileName , PATH, multipartFile.getSize() , newFileName);

            fileList.add(fileEntity);


            //로컬 경로 저장
            String fileName = PATH + newFileName;
            multipartFile.transferTo(new File(fileName));
        }
        return fileList;
    }

    public void readImages(String fileName, HttpServletResponse response, FileEntity entity) throws IOException {
        response.addHeader("Content-disposition", "attachment; fileName="+fileName);
        String path = "/Users/raina/Desktop/traduler_react/img_repo/";
        File file = new File(path+entity.getSavedFileName());
        FileInputStream fis = new FileInputStream(file);
        FileCopyUtils.copy(fis, response.getOutputStream());
        fis.close();
    }

    public void deleteImages(List<FileEntity> fileEntities){

        fileEntities.forEach( e -> {
            File file = new File(PATH  + e.getSavedFileName());
            if (file.exists()){
                file.delete();
            }
        });
    }



}
