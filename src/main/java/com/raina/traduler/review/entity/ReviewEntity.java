package com.raina.traduler.review.entity;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.themeList.entity.ThemeListEntity;
import jakarta.persistence.*;
import lombok.*;
import org.apache.ibatis.annotations.One;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "place_review")
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reviewId;

    //FK
    @ManyToOne
    @JoinColumn(name = "placeId")
    private ThemeListEntity themeList;

    private String userId;

    private String content;

    private LocalDateTime regDate;

    //file_storage에 foreign key => placeId
    @Builder.Default
    @OneToMany(mappedBy = "reviewId", cascade = CascadeType.ALL)
    private List<FileEntity> files = new ArrayList<>();

}
