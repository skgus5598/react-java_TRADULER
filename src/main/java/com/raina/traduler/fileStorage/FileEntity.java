package com.raina.traduler.fileStorage;

import com.raina.traduler.review.entity.ReviewEntity;
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
import java.util.List;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "FILE_STORAGE")
public class FileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String originalFileName;

    private String savedFileName;

    private String filePath;

    private Long fileSize;

    private LocalDateTime regDt;

    private LocalDateTime modDt;

    private String crtId;

    private int reviewId;

    // FK
    @ManyToOne
    @JoinColumn(name = "placeId")
    private ThemeListEntity themeList; //여기서 theme_nm이랑 place_id가져와보기

    public FileEntity(String originFileName, String path, long size, String newFileName, String createId, int reviewId) {
        this.originalFileName = originFileName;
        this.filePath = path;
        this.fileSize = size;
        this.savedFileName = newFileName;
        this.regDt = LocalDateTime.now();
        this.crtId = createId;
        this.reviewId = reviewId;
    }



    //themList만 setter만들어줬음
    public void setThemeList(ThemeListEntity themeList) {
        this.themeList = themeList;
    }




    //양방향 연관관계 -> 항상 양쪽에 값을 설정하자 (연관관계 편의 메서드)
/*    public void addThemeList(ThemeListEntity entity){
        this.themeList = entity;
     //   entity.getFileEntity().add(this);
    }
*/

}
