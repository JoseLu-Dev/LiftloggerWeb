package com.joseludev.liftloggerweb.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.util.UUID;

@Entity
@Table(name = "exercises")
@SQLRestriction("deleted_at IS NULL")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coach_id")
    private UserEntity coach;

    @Column(name = "category")
    private String category;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String name;
}
