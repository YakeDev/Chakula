# Changelog

## [0.2.0] - 2025-12-17
### Added
- Schéma Prisma complet pour les utilisateurs, restaurants, menus, commandes, paiements et livraisons
- Module d'authentification NestJS avec endpoints `/api/auth/register`, `/api/auth/login` et token HMAC simple
- Types partagés pour les profils utilisateurs et les jetons afin d'unifier API et clients
- Mise à jour des apps web/mobile pour refléter la version 0.2.0 et la disponibilité de l'auth de base

## [0.1.0] - 2025-11-13
### Added
- Monorepo basique avec workspaces npm (apps, api, database, shared, docs)
- Applications Next.js (web) et Expo (mobile) initialisées avec TypeScript strict & Tailwind côté web
- Backend NestJS avec endpoint `/api/health` et tests e2e/unit
- Package `@chakula/shared` pour centraliser les types, construit automatiquement via `prepare`
- Workspace `database/` équipé de Prisma + documentation Supabase
- Scripts npm pour lancer/dev/lint les différents services + configuration ESLint/Prettier commune
