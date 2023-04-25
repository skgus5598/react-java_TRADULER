package com.raina.traduler.fileStorage;

import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.ibatis.annotations.Many;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.Date;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "FILE_STORAGE")
public class FileEntity {

    @Id
    @Column(name = "FILE_NM")
    private String fileName;

    private String filePath;

    private Long fileSize;

    private String savLoc;

    @CreatedDate
    private LocalDateTime regDt;

    @LastModifiedDate
    private LocalDateTime modDt;

    private String crtId;

    // FK
    @ManyToOne
    @JoinColumn(name = "placeId")
    private ThemeListEntity themeList; //여기서 theme_nm이랑 place_id가져와보기

    //themList만 setter만들어줬음
    public void setThemeList(ThemeListEntity themeList) {
        this.themeList = themeList;
    }

    public FileEntity(String originalFileName, String filePath, Long fileSize){
        this.fileName = originalFileName;
        this.filePath = filePath;
        this.fileSize = fileSize;
    }


    //양방향 연관관계 -> 항상 양쪽에 값을 설정하자 (연관관계 편의 메서드)
/*    public void addThemeList(ThemeListEntity entity){
        this.themeList = entity;
     //   entity.getFileEntity().add(this);
    }
*/



}
