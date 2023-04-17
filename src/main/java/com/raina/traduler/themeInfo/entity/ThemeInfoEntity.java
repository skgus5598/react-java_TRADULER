package com.raina.traduler.themeInfo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Entity(name = "THEME_INFO")
public class ThemeInfoEntity {

    @Id
    @Column(name = "THEME_NAME")
    private String themeName;

    @Column(name = "THEME_INTRO")
    private String themeIntro;
}
