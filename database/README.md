# Database & Supabase Setup

This workspace centralizes everything related to the data layer. It keeps Prisma artifacts close to the Supabase configuration so every service (web, mobile, API) consumes the same schema.

## Requirements
- PostgreSQL 15+ (Supabase cloud project or local `supabase start`)
- Node.js 20+
- Prisma CLI (`npm run prisma:generate` installs it via devDependencies)

## Environment Variables
Configure the following variables in the repository `.env` file (an example lives at the repo root):

```
DATABASE_URL=postgresql://postgres:postgres@localhost:54322/postgres
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_ANON_KEY=...
```

## Commands
- `npm run prisma:format` – format the Prisma schema
- `npm run prisma:generate` – regenerate the Prisma client for consumers (API, jobs, etc.)
- `npm run db:push` – push the current schema to the database (development only)
- `npm run db:migrate` – create and run a named migration once models are added in v0.2.0
- `npm run db:studio` – open Prisma Studio for quick data inspection

## Supabase RLS
Base Row Level Security (RLS) policies will be defined alongside the real data models during **v0.2.0 — Core Data & Auth**. For now, keep the Supabase project empty so migrations remain reproducible.
