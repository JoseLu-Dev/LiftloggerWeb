package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.TrainingSetEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TrainingSetRepository extends JpaRepository<TrainingSetEntity, UUID> {}
