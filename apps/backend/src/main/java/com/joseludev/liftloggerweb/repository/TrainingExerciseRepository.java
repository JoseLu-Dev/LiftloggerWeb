package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.TrainingExerciseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TrainingExerciseRepository extends JpaRepository<TrainingExerciseEntity, UUID> {}
