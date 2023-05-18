package com.raina.traduler.user.repository;

import com.raina.traduler.user.dto.UserRequest;
import com.raina.traduler.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    UserEntity findByUserId(String userId);
    Boolean existsByUserId(String userId);

}
