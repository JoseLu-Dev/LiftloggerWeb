package com.joseludev.liftloggerweb.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.util.UUID;

@Entity
@Table(name = "training_set")
@SQLRestriction("deleted_at IS NULL")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainingSetEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "training_exercise_id", nullable = false)
    private TrainingExerciseEntity trainingExercise;

    @Column(name = "set_number")
    private Integer setNumber;

    @Column(name = "target_reps")
    private Integer targetReps;

    @Column(name = "target_rpe")
    private Double targetRpe;

    @Column(name = "target_weight")
    private Double targetWeight;

    @Column(name = "actual_reps")
    private Integer actualReps;

    @Column(name = "actual_rpe")
    private Double actualRpe;

    @Column(name = "actual_weight")
    private Double actualWeight;
}
