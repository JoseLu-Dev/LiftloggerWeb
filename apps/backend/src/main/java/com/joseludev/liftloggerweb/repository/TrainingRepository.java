package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.TrainingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TrainingRepository extends JpaRepository<TrainingEntity, UUID> {}
