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

    public List<FileEntity> saveFile(List<MultipartFile> files) throws Exception{

        List<FileEntity> fileList = new ArrayList<>();

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String currentDate = now.format(formatter);

        //파일 저장 경로
        String path = "/Users/raina/Desktop/traduler_react/img_repo/";
        File file = new File(path);

        for(MultipartFile multipartFile : files){
        //    String newFileName = System.nanoTime() + multipartFile.getOriginalFilename();
            //확장자 넣어주기
            String extension = StringUtils.getFilenameExtension(multipartFile.getOriginalFilename());
            System.out.println("extension : " + extension);

            String newFileName = UUID.randomUUID().toString().replaceAll("-", "")+"."+extension;
            System.out.println("newfilename :: " + newFileName);

            String originFileName =  + System.nanoTime() + multipartFile.getOriginalFilename().toLowerCase();

            FileEntity fileEntity = new FileEntity(originFileName , path, multipartFile.getSize() , newFileName);

            fileList.add(fileEntity);

            System.out.println("filelist : " + fileList);

            //로컬 경로 저장
            String fileName = path + newFileName;
            multipartFile.transferTo(new File(fileName));
        }
        return fileList;
    }

    public void readImages(String fileName, HttpServletResponse response, FileEntity entity) throws IOException {
        System.out.println("filename :::" + fileName);
        response.addHeader("Content-disposition", "attachment; fileName="+fileName);
        String path = "/Users/raina/Desktop/traduler_react/img_repo/";
        File file = new File(path+entity.getSavedFileName());
        FileInputStream fis = new FileInputStream(file);
        FileCopyUtils.copy(fis, response.getOutputStream());
        fis.close();
    }

}
