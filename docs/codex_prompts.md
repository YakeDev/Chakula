# Codex Prompts — Chakula

Ce document contient des prompts prêts à copier-coller pour guider Codex version par version.

## Prompt Général
```
Contexte : Projet Chakula.
Utilise le fichier "Chakula Codex Instructions" comme référence obligatoire.
Version actuelle : vX.Y.Z — [objectif].
Tâche : [décris précisément ce que tu veux faire].
Donne :
- les fichiers à créer/modifier
- le code complet
- les commandes
- le résumé "fait / reste à faire"
```

## v0.1.0 — Initialisation
```
Contexte : Chakula.
Version : v0.1.0 — Project Scaffold.
Objectif : mettre en place la structure du monorepo et initialiser Next.js, Expo, NestJS.
Fais :
- créer la structure
- configurer TypeScript strict
- installer les dernières versions stables
- générer les fichiers nécessaires
```

## v0.2.0 — Auth + DB
```
Contexte : Chakula.
Version : v0.2.0 — Core Data & Auth.
Objectif : implémenter Prisma + Supabase + Auth NestJS.
Tâche :
- créer schema.prisma
- migrations
- modules auth NestJS
- endpoints register/login
```

## v0.3.0 — API Restaurants & Menus
```
Contexte : Chakula.
Version : v0.3.0 — API Foundation.
Objectif : CRUD Restaurants & Menus.
```

## v0.4.0 — Mobile MVP
```
Contexte : Chakula.
Version : v0.4.0 — Mobile MVP.
Objectif : écrans Home, Restaurant, Cart + appels API.
```

## v0.6.0 — Paiement
```
Contexte : Chakula.
Version : v0.6.0 — Mobile Payments.
Objectif : intégrer M-Pesa & Airtel Money.
```

## v1.0.0 — MVP Production
```
Contexte : Chakula.
Version : v1.0.0 — Production.
Objectif : finaliser toutes les features MVP + corrections.
```