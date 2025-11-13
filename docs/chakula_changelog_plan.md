# Chakula — Plan de Versioning & Changelog détaillé

Ce document définit **toutes les versions à suivre étape par étape** pour le développement de Chakula (Web + Mobile + API + Dashboards).
Il sert à la fois de **roadmap produit** et de **CHANGELOG structuré**.

---

## 🟢 Phase 0 — Préparation (v0.1.0 à v0.3.0)

### v0.1.0 — Initialisation du Projet
**Objectif :** Mettre en place le socle technique.

**Inclus :**
- Création du monorepo (apps/, api/, database/, docs/)
- Setup Next.js (web), Expo (mobile), NestJS (API)
- Configuration Supabase (projet + clés + RLS de base)
- Configuration Prisma (schéma initial + migrations)
- Setup TailwindCSS sur le web
- Setup ESLint + Prettier + TypeScript strict
- Setup GitHub (repo, branches main/dev)
- Fichiers de base : README, LICENSE, .gitignore

**Tag :** `v0.1.0` — "Project Scaffold"

---

### v0.2.0 — Modèle de Données + Auth de Base
**Objectif :** Disposer d’une base de données utilisable + authentification.

**Inclus :**
- Création des tables : users, restaurants, menus, orders, payments
- Mise en place des rôles : client, restaurant, livreur, super_admin
- Authentification (register/login) via email + mot de passe
- JWT (access + refresh tokens)
- Mise en place de RLS basique par rôle
- Tests unitaires initiaux sur l’API d’auth

**Tag :** `v0.2.0` — "Core Data & Auth"

---

### v0.3.0 — Premier CRUD & Dashboard Technique
**Objectif :** Pouvoir manipuler les données depuis l’API et tester les flux.

**Inclus :**
- Endpoints CRUD Restaurants + Menus (API NestJS)
- Endpoints CRUD de test pour Orders (sans paiement)
- Mini interface interne (ou Swagger) pour tester l’API
- Documentation initiale `/docs/api.md`

**Tag :** `v0.3.0` — "API Foundation"

---

## 🟡 Phase 1 — MVP Fonctionnel (v0.4.0 à v1.0.0)

### v0.4.0 — MVP Mobile Client (Commande sans Paiement)
**Objectif :** Permettre à un client de passer une commande de bout en bout (sans intégration de paiement réel).

**Inclus :**
- Écrans mobile : Onboarding, Login, Liste restaurants, Menu, Panier, Confirmation commande
- Appels API : restaurants, menus, création commande
- Gestion d’état (ex : Zustand / Context / Redux selon choix)
- Affichage des statuts de commande (mock)

**Tag :** `v0.4.0` — "Mobile MVP (sans paiement)"

---

### v0.5.0 — Dashboard Restaurant (Version minimale)
**Objectif :** Que les restaurants puissent voir et traiter les commandes.

**Inclus :**
- Login restaurant
- Liste des commandes en temps réel (ou polling)
- Mise à jour du statut : acceptée, en préparation, prête
- Vue simple des ventes du jour

**Tag :** `v0.5.0` — "Restaurant Dashboard MVP"

---

### v0.6.0 — Intégration Paiement Mobile (M-Pesa / Airtel)
**Objectif :** Activer le flux complet avec paiement réel.

**Inclus :**
- Intégration M-Pesa (sandbox) + Airtel Money
- Création du module payments (backend)
- Webhooks de confirmation
- Mise à jour du statut de la commande après paiement validé
- Gestion des erreurs de paiement (échec / annulation)

**Tag :** `v0.6.0` — "Mobile Payments"

---

### v0.7.0 — Suivi Livreurs + Traçabilité
**Objectif :** Suivi temps réel des livraisons.

**Inclus :**
- App ou module livreur : liste courses + acceptation + mise à jour statut
- Géolocalisation livreur (mobile)
- Intégration Supabase Realtime pour le suivi du trajet
- Affichage de la position du livreur côté client

**Tag :** `v0.7.0` — "Live Delivery Tracking"

---

### v0.8.0 — Version Web Client
**Objectif :** Permettre la commande via navigateur.

**Inclus :**
- Pages Next.js : accueil, login, liste restaurants, menu, panier, confirmation
- Appels API alignés avec la version mobile
- Responsive design

**Tag :** `v0.8.0` — "Web Client MVP"

---

### v0.9.0 — Dashboard Super Admin (Version 1)
**Objectif :** Donner une vue globale à l’admin Chakula.

**Inclus :**
- Login super_admin
- Vue globale : nombre d’utilisateurs, restaurants, commandes, revenus
- Liste des restaurants + activation/désactivation
- Première version des exports CSV

**Tag :** `v0.9.0` — "Admin Overview"

---

### v1.0.0 — MVP Complet en Production
**Objectif :** Version stable utilisable en conditions réelles.

**Inclus :**
- Mobile client stable
- Web client stable
- Dashboard restaurant stable
- Dashboard super admin stable
- Paiement + livraison fonctionnels
- Documentation mise à jour (README + docs/)
- Déploiements stables (Vercel, Railway/Render, Expo)

**Tag :** `v1.0.0` — "Chakula MVP Production"

---

## 🔵 Phase 2 — Améliorations & Valeur Produit (v1.1.0 à v1.5.0)

### v1.1.0 — UX & UI Upgrade
- Amélioration des animations et micro-interactions
- Refonte visuelle partielle : listings, fiches restaurant, tracking
- Optimisations performances (bundle splitting, images)

### v1.2.0 — Notifications & Communications
- Notifications push (Expo) pour les clients
- Notifications pour restaurants (nouvelles commandes)
- Notifications SMS/WhatsApp optionnelles

### v1.3.0 — Coupons & Promotions
- Gestion des coupons (code promo) côté admin
- Application des réductions sur le panier
- Statistiques utilisation coupons

### v1.4.0 — Programme Fidélité
- Points fidélité par commande
- Affichage solde points
- Utilisation des points comme réduction

### v1.5.0 — SEO & Performance Web
- Optimisation SEO Next.js
- Pages statiques (ISR/SSG) pour les listes
- Lighthouse score amélioration

---

## 🟣 Phase 3 — Features Avancées & IA (v2.0.0+)

### v2.0.0 — Chat & Support
- Chat client ↔ support Chakula
- Chat simple restaurant ↔ client

### v2.1.0 — Recommandations
- Suggestions de restaurants selon l’historique
- Sections : "Pour toi", "Recommandé près de chez toi"

### v2.2.0 — Analytics Avancés
- Dashboard avancé : heatmaps de commandes, heures de rush
- Filtres par quartier, type de cuisine, ticket moyen

### v2.3.0 — PWA & Mode Offline
- Version PWA pour la web app
- Fonctionnalité offline partielle (consultation dernier menu)

---

## 📄 Structure du fichier CHANGELOG.md

Toutes ces versions doivent être consignées dans `/CHANGELOG.md` sous la forme :

```md
## [1.0.0] - 2025-03-01
### Added
- Version mobile, web, dashboard restaurant & admin pour MVP
- Paiement M-Pesa + Airtel

### Changed
- UI liste restaurants

### Fixed
- Bug sur recalcul du total panier
```

Chaque fois que tu termines une étape (v0.1.0, v0.2.0, etc.), tu peux :
- Taguer la version (`git tag v0.1.0`)
- Compléter la section dans le CHANGELOG
- Cocher la phase correspondante dans Notion/Trello/Jira.

---

Fin du plan de versioning détaillé. Ce document sert de **roadmap exécutable**, que tu peux suivre et ajuster au fur et à mesure de l’évolution de Chakula.

