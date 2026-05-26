package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.ExerciseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExerciseRepository extends JpaRepository<ExerciseEntity, UUID> {}
