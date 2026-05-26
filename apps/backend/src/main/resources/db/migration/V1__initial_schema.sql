CREATE TABLE users (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    coach_id uuid NULL,
    email varchar(255) NOT NULL,
    "name" varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL,
    "role" varchar(255) NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_role_check CHECK (((role)::text = ANY ((ARRAY['COACH'::character varying, 'ATHLETE'::character varying])::text[]))),
    CONSTRAINT users_coach_id_fkey FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE exercises (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    coach_id uuid NULL,
    category varchar(255) NULL,
    description text NULL,
    "name" varchar(255) NOT NULL,
    CONSTRAINT exercises_pkey PRIMARY KEY (id),
    CONSTRAINT exercises_coach_id_fkey FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE variants (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    coach_id uuid NULL,
    description varchar(255) NULL,
    "name" varchar(255) NOT NULL,
    CONSTRAINT variants_pkey PRIMARY KEY (id),
    CONSTRAINT variants_coach_id_fkey FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE training (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    athlete_id uuid NOT NULL,
    "name" varchar(255) NOT NULL,
    session_date date NULL,
    notes varchar(255) NULL,
    CONSTRAINT training_pkey PRIMARY KEY (id),
    CONSTRAINT training_athlete_id_fkey FOREIGN KEY (athlete_id) REFERENCES users(id) ON DELETE RESTRICT
);

CREATE TABLE training_exercise (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    training_id uuid NOT NULL,
    exercise_id uuid NOT NULL,
    order_index int4 NULL,
    notes text NULL,
    CONSTRAINT training_exercise_pkey PRIMARY KEY (id),
    CONSTRAINT training_exercise_training_id_fkey FOREIGN KEY (training_id) REFERENCES training(id) ON DELETE CASCADE,
    CONSTRAINT training_exercise_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES exercises(id) ON DELETE RESTRICT
);

CREATE TABLE training_exercise_variants (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    training_exercise_id uuid NOT NULL,
    variant_id uuid NOT NULL,
    CONSTRAINT training_exercise_variants_pkey PRIMARY KEY (id),
    CONSTRAINT training_exercise_variants_training_exercise_id_fkey FOREIGN KEY (training_exercise_id) REFERENCES training_exercise(id) ON DELETE CASCADE,
    CONSTRAINT training_exercise_variants_variant_id_fkey FOREIGN KEY (variant_id) REFERENCES variants(id) ON DELETE RESTRICT
);

CREATE TABLE training_set (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    training_exercise_id uuid NOT NULL,
    set_number int4 NULL,
    target_reps int4 NULL,
    target_rpe float8 NULL,
    target_weight float8 NULL,
    actual_reps int4 NULL,
    actual_rpe float8 NULL,
    actual_weight float8 NULL,
    CONSTRAINT training_set_pkey PRIMARY KEY (id),
    CONSTRAINT training_set_training_exercise_id_fkey FOREIGN KEY (training_exercise_id) REFERENCES training_exercise(id) ON DELETE CASCADE
);

CREATE TABLE body_weight_entries (
    created_at timestamptz(6) NOT NULL,
    deleted_at timestamptz(6) NULL,
    updated_at timestamptz(6) NOT NULL,
    id uuid NOT NULL,
    athlete_id uuid NOT NULL,
    measurement_date date NOT NULL,
    weight float8 NOT NULL,
    notes varchar(255) NULL,
    CONSTRAINT body_weight_entries_pkey PRIMARY KEY (id),
    CONSTRAINT body_weight_entries_athlete_id_fkey FOREIGN KEY (athlete_id) REFERENCES users(id) ON DELETE RESTRICT
);

-- FK indexes
CREATE INDEX idx_users_coach_id ON users(coach_id);
CREATE INDEX idx_exercises_coach_id ON exercises(coach_id);
CREATE INDEX idx_variants_coach_id ON variants(coach_id);
CREATE INDEX idx_training_athlete_id ON training(athlete_id);
CREATE INDEX idx_training_exercise_training_id ON training_exercise(training_id);
CREATE INDEX idx_training_exercise_exercise_id ON training_exercise(exercise_id);
CREATE INDEX idx_tev_training_exercise_id ON training_exercise_variants(training_exercise_id);
CREATE INDEX idx_tev_variant_id ON training_exercise_variants(variant_id);
CREATE INDEX idx_training_set_training_exercise_id ON training_set(training_exercise_id);
CREATE INDEX idx_body_weight_entries_athlete_id ON body_weight_entries(athlete_id);
