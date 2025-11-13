# Chakula — Documentation Étendue

Ce fichier regroupe toutes les sections avancées : User Stories, ERD, Workflows, Setup Avancé, Sécurité, Contribution.

---

# 1. User Stories

## 1.1 Utilisateur Client
- En tant que **client**, je veux créer un compte pour accéder à tous les services.
- En tant que **client**, je veux rechercher des restaurants selon ma localisation.
- En tant que **client**, je veux ajouter des plats à mon panier.
- En tant que **client**, je veux payer ma commande via M-Pesa ou Airtel.
- En tant que **client**, je veux suivre mon livreur sur la carte.
- En tant que **client**, je veux noter la qualité du service.

## 1.2 Restaurant
- En tant que **restaurant**, je veux recevoir les commandes en temps réel.
- En tant que **restaurant**, je veux gérer mon menu (plats, prix, disponibilité).
- En tant que **restaurant**, je veux voir les statistiques journalières.
- En tant que **restaurant**, je veux mettre à jour le statut d’une commande.

## 1.3 Livreur
- En tant que **livreur**, je veux consulter les commandes disponibles.
- En tant que **livreur**, je veux accepter une course.
- En tant que **livreur**, je veux activer la navigation GPS.
- En tant que **livreur**, je veux mettre à jour le statut de la livraison.

## 1.4 Super Admin
- En tant que **super admin**, je veux consulter toutes les données globales.
- En tant que **super admin**, je veux superviser les paiements.
- En tant que **super admin**, je veux exporter les données.
- En tant que **super admin**, je veux surveiller les statistiques de performance.

---

# 2. ERD (Diagramme Relationnel)
```
users ---< restaurants
users ---< orders
restaurants ---< menus
orders ---< order_items
orders ---< deliveries
orders ---< payments
restaurants ---< ratings
users ---< ratings
```

---

# 3. Workflows

## 3.1 Workflow Commande
```
Client → Passe commande → API → Restaurant
Restaurant → Accepte → API → Livreur
Livreur → Livre → API → Client
Client → Note → Fin
```

## 3.2 Workflow Paiement
```
Client → M-Pesa/Airtel → Confirmation API → DB → Validation commande
```

## 3.3 Workflow Livraison
```
Livreur reçoit course → Acceptation → GPS → Livraison → Confirmation
```

---

# 4. Guide Setup (Avancé)

## 4.1 Installation globale
1. Cloner le repo
2. Installer les dépendances via PNPM ou NPM
3. Configurer Supabase
4. Lancer backend
5. Lancer web, mobile et dashboards

## 4.2 Setup Backend
- NestJS avec `.env`
- Prisma migrate
- Webhooks paiements

## 4.3 Setup Web & Dashboards
- Next.js
- Variables d’environnement
- Connexion Realtime Supabase

## 4.4 Setup Mobile
- Expo
- Google Maps SDK

---

# 5. Sécurité

## 5.1 Authentification
- JWT Access + Refresh Tokens
- Validation Zod

## 5.2 Supabase RLS
- Règles par rôle
- Accès super admin global

## 5.3 Paiements
- Webhooks sécurisés
- Vérification signature

## 5.4 Logs
- Activité API
- Tentatives invalides

---

# 6. Guide Contribution

## 6.1 Règles Git
- main = production
- dev = intégration
- feat/* = nouvelles fonctionnalités

## 6.2 Conventions Commit
- feat: nouvelle fonctionnalité
- fix: bug
- docs: documentation
- refactor: amélioration du code

## 6.3 Pull Requests
- Description claire
- Screenshots si UI
- Tests requis

## 6.4 Style Code
- ESLint + Prettier
- TypeScript strict

---

# Fin du document