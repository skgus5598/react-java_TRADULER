package com.raina.traduler.themeInfo.service;

import com.raina.traduler.themeInfo.dto.ThemeInfoResponse;
import com.raina.traduler.themeInfo.entity.ThemeInfoEntity;
import com.raina.traduler.themeInfo.repository.ThemeInfoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ThemeInfoServiceImpl implements ThemeInfoService  {

    private final ThemeInfoRepo repository;

    @Override
    public List<ThemeInfoResponse> themeInfoList() {
        List<ThemeInfoEntity> list = repository.findAll();
        System.out.println("list ::" + list.toString());
        return list.stream().map(ThemeInfoResponse::new).collect(Collectors.toList());
    }
}
