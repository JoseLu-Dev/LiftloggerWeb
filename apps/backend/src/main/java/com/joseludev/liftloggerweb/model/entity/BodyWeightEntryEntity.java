package com.joseludev.liftloggerweb.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "body_weight_entries")
@SQLRestriction("deleted_at IS NULL")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BodyWeightEntryEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "athlete_id", nullable = false)
    private UserEntity athlete;

    @Column(name = "measurement_date", nullable = false)
    private LocalDate measurementDate;

    @Column(nullable = false)
    private Double weight;

    @Column(name = "notes")
    private String notes;
}
