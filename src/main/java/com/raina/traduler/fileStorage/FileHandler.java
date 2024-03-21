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
    public static final String REVIEW_FILE_PATH = "/Users/raina/Desktop/traduler_react/review_img_repo/";


    public List<FileEntity> saveFile(List<MultipartFile> files, String createId, int reviewId) throws Exception{

        List<FileEntity> fileList = new ArrayList<>();
        String repo_path = "";

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//        String currentDate = now.format(formatter);
//        File file = new File(PATH);

        if(createId.equals("admin")){
            repo_path = PATH;
        }else{
            repo_path = REVIEW_FILE_PATH;
        }

        for(MultipartFile multipartFile : files){
        //    String newFileName = System.nanoTime() + multipartFile.getOriginalFilename();
            //확장자 넣어주기
            String extension = StringUtils.getFilenameExtension(multipartFile.getOriginalFilename());

            String newFileName = UUID.randomUUID().toString().replaceAll("-", "")+"."+extension;

            String originFileName =  + System.nanoTime() + multipartFile.getOriginalFilename().toLowerCase();

            FileEntity fileEntity = new FileEntity(originFileName , repo_path, multipartFile.getSize() , newFileName, createId, reviewId);

            fileList.add(fileEntity);


            //로컬 경로 저장
            String fileName = repo_path + newFileName;
            multipartFile.transferTo(new File(fileName));
        }
        return fileList;
    }

    public void readImages(String type, String fileName, HttpServletResponse response, FileEntity entity) throws IOException {
        String path = "";
        if(type.equals("themeView")){
            path = "/Users/raina/Desktop/traduler_react/img_repo/";
        }else{
            path = "/Users/raina/Desktop/traduler_react/review_img_repo/";
        }
        response.addHeader("Content-disposition", "attachment; fileName="+fileName);
        File file = new File(path+entity.getSavedFileName());
        FileInputStream fis = new FileInputStream(file);
        FileCopyUtils.copy(fis, response.getOutputStream());
        fis.close();
    }

    public void deleteImages(List<FileEntity> fileEntities, String createId){
        String repo_path;
        if(createId.equals("admin")){
            repo_path = PATH;
        }else{
            repo_path = REVIEW_FILE_PATH;
        }
        fileEntities.forEach( e -> {
            File file = new File(repo_path  + e.getSavedFileName());
            if (file.exists()){
                file.delete();
            }
        });
    }



}
