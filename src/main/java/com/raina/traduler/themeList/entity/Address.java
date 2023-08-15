package com.raina.traduler.themeList.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class Address {

    private String placeAddr;

    @Column(name = "PLACE_LATITUDE")
    private String latitude;

    @Column(name = "PLACE_LONGITUDE")
    private String longitude;



}
