# LiftLogger Web

Monorepo — Angular (web + mobile) · Spring Boot 4 · Nx 22 · pnpm

## Structure

```
apps/
  web/        Angular web app
  mobile/     Angular + Capacitor mobile app
  backend/    Spring Boot 4 REST API
libs/
  frontend/   Shared Angular library  (@liftlogger/frontend)
  contracts/  OpenAPI spec + generated client  (@liftlogger/contracts)
```

## Prerequisites

- Node 20+, pnpm 11+
- Java 25, Maven 3.9+
- Android Studio (Android) / Xcode (iOS)

## Install

```bash
pnpm install
```

## Development

```bash
# Web
nx serve web

# Mobile (browser preview)
nx serve mobile

# Backend
cd apps/backend && ./mvnw spring-boot:run
```

## Contract generation

The full pipeline runs in two steps: backend generates the spec, then Nx generates the Angular client.

```bash
# 1. Generate OpenAPI spec from Spring controllers
#    Output: libs/contracts/src/openapi/api.yaml
cd apps/backend && ./mvnw verify

# 2. Generate TypeScript Angular client from the spec
#    Output: libs/contracts/src/generated/
nx run contracts:generate
```

Run both whenever the backend API changes.

## Build

```bash
nx build web
nx build mobile
cd apps/backend && ./mvnw package
```

## Mobile — native

```bash
# Build Angular and sync to native projects (Android/iOS)
nx run mobile:cap-sync

# Open in Android Studio
nx run mobile:cap-open-android

# Open in Xcode
nx run mobile:cap-open-ios
```

## Test & lint

```bash
# Run tests for all affected projects
nx affected -t test

# Lint all affected projects
nx affected -t lint

# Run e2e (Playwright)
nx run web-e2e:e2e
nx run mobile-e2e:e2e
```
