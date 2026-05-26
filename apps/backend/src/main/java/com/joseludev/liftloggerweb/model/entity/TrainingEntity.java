package com.joseludev.liftloggerweb.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "training")
@SQLRestriction("deleted_at IS NULL")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainingEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "athlete_id", nullable = false)
    private UserEntity athlete;

    @Column(nullable = false)
    private String name;

    @Column(name = "session_date")
    private LocalDate sessionDate;

    @Column(name = "notes")
    private String notes;
}
