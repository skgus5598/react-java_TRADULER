package com.raina.traduler.review.service;

import com.raina.traduler.fileStorage.FileEntity;
import com.raina.traduler.fileStorage.FileHandler;
import com.raina.traduler.fileStorage.FileRepository;
import com.raina.traduler.review.dto.ReviewRequest;
import com.raina.traduler.review.dto.ReviewResponse;
import com.raina.traduler.review.entity.ReviewEntity;
import com.raina.traduler.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository repo;
    private final FileRepository fileRepo;
    private final FileHandler fileHandler;

    @Override
    public List<ReviewResponse> getReviews(ReviewRequest requestDto) {
        List<ReviewEntity> entityList = repo.findAllByThemeListOrderByReviewIdDesc(requestDto.getThemeList());

        List<ReviewResponse> responseList = new ArrayList<>();
        entityList.forEach( e -> {
            responseList.add(new ReviewResponse(e));
        });
        return responseList;
    }

    @Override
    public ReviewResponse addReview(ReviewRequest requestDto) throws Exception {
        log.info("**** addreview ::", requestDto.toString());
        ReviewEntity reviewEntity = repo.save(requestDto.toReviewEntity());
        List<FileEntity> fileList = fileHandler.saveFile(requestDto.getFiles(), requestDto.getUserId(), reviewEntity.getReviewId());
        for(FileEntity file : fileList){
            reviewEntity.getThemeList().addFile(file);
            fileRepo.save(file);
        }
        return new ReviewResponse(reviewEntity);
    }
}
