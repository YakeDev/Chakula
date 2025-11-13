# Codex Setup — Chakula

Ce document décrit toutes les commandes et procédures que Codex doit utiliser pour installer, configurer et maintenir le projet Chakula.

---

# 🔧 1. Règles Globales
- Toujours installer la **dernière version stable** des packages.
- Toujours utiliser **npm** (sauf demande contraire).
- Toujours exécuter les commandes dans les bons dossiers.
- Toujours respecter la structure du projet :
```
root/apps/*
root/api
root/database
```

---

# 📦 2. Installation des technologies principales

## 2.1 Next.js (Web + Dashboards)
```
npx create-next-app@latest . --typescript --eslint --tailwind --src-dir
```

## 2.2 Expo (Mobile)
```
npx create-expo-app@latest mobile --template
```

## 2.3 NestJS (Backend)
```
npm install -g @nestjs/cli
nest new api
```

---

# 🎨 3. Setup Tailwind (Next.js)
```
npx tailwindcss init -p
```
Puis configurer :
```
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

---

# 🗄️ 4. Setup Prisma + Supabase

## Installer Prisma
```
npm install prisma @prisma/client
npx prisma init
```

## Lancer une migration
```
npx prisma migrate dev --name init
```

## Pousser le schéma vers la DB
```
npx prisma db push
```

---

# 🔐 5. Auth (NestJS)
Installer JWT + Passport :
```
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
```

---

# 🌍 6. Google Maps + Géolocalisation
Mobile :
```
expo install expo-location
expo install react-native-maps
```

Web :
```
npm install @googlemaps/js-api-loader
```

---

# 💸 7. Paiement — M-Pesa & Airtel Money
Installer les dépendances nécessaires :
```
npm install axios dotenv
```

---

# 🚀 8. Lancer chaque service

## Mobile
```
cd apps/mobile
npm start
```

## Web Client
```
cd apps/web
npm run dev
```

## Dashboard Restaurant
```
cd apps/restaurant-dashboard
npm run dev
```

## Dashboard Admin
```
cd apps/admin-dashboard
npm run dev
```

## API
```
cd api
npm run start:dev
```

---

# 🧹 9. Qualité du code

## ESLint + Prettier
```
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

Exécuter :
```
npm run lint
```

---

# 🧪 10. Tests
Installer Jest (NestJS) :
```
npm install --save-dev jest @types/jest ts-jest
```

---

# 🏁 11. Procédures importantes

### 11.1 Mettre à jour une dépendance
```
npm update nom-librairie
```

### 11.2 Vérifier les versions
```
npm outdated
```

### 11.3 Purger les modules node
```
rm -rf node_modules
npm install
```

---

# 🎯 Objectif
Ce fichier dit à Codex exactement :
- quelles commandes utiliser
- quoi installer
- comment configurer Tailwind, Prisma, Nest, Expo, Next
- comment lancer tous les services
- comment garder le projet propre

Codex doit appliquer ce fichier **à chaque étape du développement**.

