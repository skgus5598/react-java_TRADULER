package com.raina.traduler.themeList.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "PLACE_ADDR")
public class PlaceAddrEntity {

    @Id
    private String placeAddr;

    @Column(name = "PLACE_LATITUDE")
    private int latitude;

    @Column(name = "PLACE_LONGITUDE")
    private int longitude;

    // FK
    @OneToOne
    @JoinColumn(name = "placeId")
    private ThemeListEntity themeList ;

    public void setThemeList(ThemeListEntity entity){
        this.themeList = entity;
    }


}
