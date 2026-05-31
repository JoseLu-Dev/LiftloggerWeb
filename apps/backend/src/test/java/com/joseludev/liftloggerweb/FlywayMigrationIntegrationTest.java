package com.joseludev.liftloggerweb;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
class FlywayMigrationIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
            .withDatabaseName("liftloggerweb_test")
            .withUsername("test")
            .withPassword("test");

    @DynamicPropertySource
    static void overrideDataSourceProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private DataSource dataSource;

    @Test
    void contextLoads() {
    }

    @Test
    void flywayHistoryRecordsSuccessfulMigration() throws Exception {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(
                     "SELECT version, description, success FROM flyway_schema_history ORDER BY installed_rank")) {

            assertTrue(rs.next(), "flyway_schema_history must have at least one row");
            assertEquals("1", rs.getString("version"));
            assertEquals("initial schema", rs.getString("description"));
            assertTrue(rs.getBoolean("success"));
            assertFalse(rs.next(), "only one migration should be present");
        }
    }

    @Test
    void allExpectedTablesExist() throws Exception {
        List<String> expectedTables = List.of(
                "users", "exercises", "variants", "training",
                "training_exercise", "training_exercise_variants",
                "training_set", "body_weight_entries"
        );

        try (Connection conn = dataSource.getConnection()) {
            for (String table : expectedTables) {
                try (ResultSet rs = conn.getMetaData().getTables(null, "public", table, new String[]{"TABLE"})) {
                    assertTrue(rs.next(), "Table '" + table + "' must exist");
                }
            }
        }
    }

    @Test
    void keyConstraintsArePresent() throws Exception {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement()) {

            try (ResultSet rs = stmt.executeQuery(
                    "SELECT is_nullable FROM information_schema.columns " +
                    "WHERE table_schema='public' AND table_name='users' AND column_name='email'")) {
                assertTrue(rs.next());
                assertEquals("NO", rs.getString("is_nullable"));
            }

            try (ResultSet rs = stmt.executeQuery(
                    "SELECT constraint_type FROM information_schema.table_constraints " +
                    "WHERE table_schema='public' AND table_name='users' AND constraint_name='users_email_key'")) {
                assertTrue(rs.next());
                assertEquals("UNIQUE", rs.getString("constraint_type"));
            }

            try (ResultSet rs = stmt.executeQuery(
                    "SELECT constraint_name FROM information_schema.table_constraints " +
                    "WHERE table_schema='public' AND table_name='users' AND constraint_type='CHECK' " +
                    "AND constraint_name='users_role_check'")) {
                assertTrue(rs.next(), "CHECK constraint on users.role must exist");
            }

            try (ResultSet rs = stmt.executeQuery(
                    "SELECT constraint_name FROM information_schema.table_constraints " +
                    "WHERE table_schema='public' AND table_name='training' " +
                    "AND constraint_type='FOREIGN KEY' AND constraint_name='training_athlete_id_fkey'")) {
                assertTrue(rs.next(), "FK from training.athlete_id to users must exist");
            }

            try (ResultSet rs = stmt.executeQuery(
                    "SELECT is_nullable FROM information_schema.columns " +
                    "WHERE table_schema='public' AND table_name='body_weight_entries' AND column_name='weight'")) {
                assertTrue(rs.next());
                assertEquals("NO", rs.getString("is_nullable"));
            }
        }
    }
}
