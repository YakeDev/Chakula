# Changelog

## [0.1.0] - 2025-11-13
### Added
- Monorepo basique avec workspaces npm (apps, api, database, shared, docs)
- Applications Next.js (web) et Expo (mobile) initialisées avec TypeScript strict & Tailwind côté web
- Backend NestJS avec endpoint `/api/health` et tests e2e/unit
- Package `@chakula/shared` pour centraliser les types, construit automatiquement via `prepare`
- Workspace `database/` équipé de Prisma + documentation Supabase
- Scripts npm pour lancer/dev/lint les différents services + configuration ESLint/Prettier commune
