package com.raina.traduler.themeList.entity;

import com.raina.traduler.fileStorage.FileEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Entity(name = "THEME_LIST")
public class ThemeListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int placeId;

    private String placeName;

    private String contentIntro;

    private String contentMain;

    private String themeName;

    ///////////////////////////////////////


    @Builder.Default
    @OneToMany(mappedBy = "themeList")
    private List<FileEntity> files = new ArrayList<>();

    /* @Builder를 이용해서 생성한 객체는 필드 자료형의 기본 초기값으로 생성이 된다.
        따라서 빌더 패턴을 통해 객체를 만들었는데, 해당 arraylist는 값을 전달해주지 않아서
        기본 초기값인  null로 되어 있었고, 해당 null에 add 메서드를 실행해서
        nullpointerexception 발생했던것.
        결론 : 클래스 꼭대기에 빌더패턴 @ 사용시 @Builder.Default 달아주기
    */
    //양방향 연관관계 -> 항상 양쪽에 값을 설정하자 (연관관계 편의 메서드)
    public void addFile(FileEntity entity){
       entity.setThemeList(this);
       files.add(entity);
    }


}
