# Chakula Monorepo

Chakula est une plateforme de commande et de livraison multi-support (mobile, web, dashboards, API). Ce dépôt rassemble tout le code afin de mutualiser les types, outils et workflows.

## Structure
```
root/
 ├── apps/
 │   ├── web/                  → Next.js app client
 │   ├── mobile/               → Expo app client
 │   ├── restaurant-dashboard/ → Placeholder workspace (v0.5.0)
 │   └── admin-dashboard/      → Placeholder workspace (v0.9.0)
 ├── api/                      → NestJS backend
 ├── database/                 → Prisma schema + Supabase assets
 ├── shared/                   → Types & utils communs
 └── docs/                     → Documentation fonctionnelle
```

## Prérequis
- Node.js 20+
- npm 10+
- Accès à un projet Supabase (local `supabase start` ou cloud)

## Commandes utiles
```
npm install                   # installe toutes les dépendances du monorepo
npm run dev:web               # Next.js
npm run dev:mobile            # Expo
npm run dev:api               # NestJS API
npm run format                # Prettier sur tout le dépôt
npm run lint:web              # Lint Next.js
npm run lint:api              # Lint API
```

Les instructions détaillées de versionning et de livraison se trouvent dans `docs/` (notamment `chakula_codex_instructions.md` et `chakula_changelog_plan.md`).
