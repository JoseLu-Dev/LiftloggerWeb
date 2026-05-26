package com.joseludev.liftloggerweb.repository;

import com.joseludev.liftloggerweb.model.entity.VariantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VariantRepository extends JpaRepository<VariantEntity, UUID> {}
