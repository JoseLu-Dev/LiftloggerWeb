package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.TrainingExerciseVariantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TrainingExerciseVariantRepository extends JpaRepository<TrainingExerciseVariantEntity, UUID> {}
