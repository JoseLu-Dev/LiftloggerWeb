package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.BodyWeightEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BodyWeightEntryRepository extends JpaRepository<BodyWeightEntryEntity, UUID> {}
