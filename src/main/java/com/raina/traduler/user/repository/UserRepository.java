package com.raina.traduler.user.repository;

import com.raina.traduler.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    Optional<UserEntity> findByUserId(String userId);
    Boolean existsByUserId(String userId);

}
