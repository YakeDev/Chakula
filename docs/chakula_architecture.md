# Chakula — Architecture Technique

## Vue d’Ensemble
Chakula repose sur un écosystème multi‑plateforme intégrant :
- Application mobile (React Native)
- Application web client (Next.js)
- Dashboard restaurant (Next.js)
- Dashboard super admin (Next.js)
- Backend API (NestJS)
- Base de données (Supabase)

---

## Architecture Globale
```
                ┌─────────────────────┐
                │   Web Client        │
                │    (Next.js)        │
                └────────┬────────────┘
                         │
                ┌────────▼────────────┐
                │   Mobile App        │
                │ (React Native)      │
                └────────┬────────────┘
                         │
       ┌─────────────────▼──────────────────┐
       │           API Backend              │
       │            (NestJS)                │
       └───────────────┬────────────────────┘
                       │
             ┌─────────▼─────────┐
             │     Supabase      │
             │ (PostgreSQL + RLS)│
             └─────────┬─────────┘
                       │
       ┌───────────────▼────────────────┐
       │  Restaurant Dashboard (Next.js) │
       └────────────────────────────────┘

       ┌───────────────▼────────────────┐
       │  Admin Dashboard (Next.js)      │
       └────────────────────────────────┘
```

---

## Services Principaux
### 1. Mobile (React Native / Expo)
- Interface client
- Paiements
- Suivi livreur GPS

### 2. Web Client (Next.js)
- Version web de la plateforme
- SEO + SSR
- Commandes en ligne

### 3. Dashboard Restaurant (Next.js)
- Gestion menus
- Suivi commandes
- Statistiques

### 4. Dashboard Super Admin (Next.js)
- Monitoring global de la plateforme
- Exports et statistiques
- Gestion utilisateurs

### 5. Backend API (NestJS)
- Auth / JWT
- Gestion commandes
- Paiements
- Webhooks
- Sécurité

### 6. Base de Données (Supabase)
- Tables normalisées
- RLS pour sécurité stricte
- Realtime : suivi livreur

---

## Flux Commande → Livraison
```
Client → API → Restaurant → Livreur → API → Client
```

1. Le client passe commande
2. Le restaurant reçoit la commande
3. Le livreur reçoit une mission
4. Suivi temps réel via Supabase Realtime
5. Livraison → confirmation → paiement validé

---

## Flux Paiements
```
Client → M-Pesa/Airtel → Webhook Backend → Validation API → Mise à jour DB
```

---

## Sécurité
- HTTPS obligatoire
- JWT Tokens
- RLS Supabase
- Logs et Audit

---

## Scalabilité
- Deployment API via Docker / Render / Railway
- Frontend via Vercel
- CDN pour assets

---

## prochaines étapes
- Mise en cache Redis
- Microservices paiements
- Optimisation temps réel livreur

