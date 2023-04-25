package com.raina.traduler.fileStorage;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

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
            String newFileName = System.nanoTime() + multipartFile.getOriginalFilename();

            FileEntity fileEntity = new FileEntity(multipartFile.getOriginalFilename(), path, multipartFile.getSize());

            fileList.add(fileEntity);

            System.out.println("filelist : " + fileList);

            //로컬 경로 저장
            String fileName = path + newFileName;
            multipartFile.transferTo(new File(fileName));
        }
        return fileList;
    }

}
