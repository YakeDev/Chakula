# 🍽️ Chakula — Web & Mobile Food Delivery Platform for Lubumbashi

Chakula est une plateforme complète (Web + Mobile) permettant aux utilisateurs de commander facilement des repas auprès des restaurants locaux, avec paiement mobile (M-Pesa / Airtel Money) et suivi GPS en temps réel.

Ce README présente :
- L'application mobile client
- L'application web client
- Le dashboard restaurant
- Le dashboard super admin
- Le backend API (NestJS)
- La base de données Supabase

---

## 📸 Démo & Screenshots
*Screenshots et vidéos à ajouter dans `/docs/screenshots`*
- App Mobile
- Web Client
- Dashboard Restaurant
- Dashboard Super Admin
- App Livreur

---

## ✨ Fonctionnalités

### 👤 Client (Mobile & Web)
- Parcourir restaurants + géolocalisation
- Rechercher par cuisine / prix / distance
- Voir menus et images HD
- Panier
- Paiement mobile (M-Pesa / Airtel Money)
- Suivi en temps réel du livreur
- Historique et avis
- Interface FR / SW

### 🧑‍🍳 Restaurant
- Gestion menu
- Réception instantanée des commandes
- Statuts : acceptée → préparation → prête
- Statistiques de ventes

### 🚚 Livreur
- Liste des courses
- Acceptation
- Navigation GPS
- Historique + revenus

### 🛠️ Super Admin
- Vue globale : utilisateurs, restaurants, commandes, paiements
- Monitoring des revenus
- Export CSV
- Accès lecture global via RLS

---

## 🏗️ Architecture Globale
```
root/
 ├── apps/
 │   ├── mobile/                 → App client (React Native)
 │   ├── web/                    → Client Web (Next.js)
 │   ├── restaurant-dashboard/   → Dashboard Restaurant
 │   └── admin-dashboard/        → Dashboard Super Admin
 ├── api/                        → Backend (NestJS)
 ├── database/                   → Supabase + Prisma
 ├── docs/                       → Documentation
 └── shared/                     → Types & utils
```

---

## ⚙️ Stack Technique
### Web : Next.js 15, React 19, TailwindCSS, TanStack Query
### Mobile : React Native + Expo
### Backend : NestJS, Prisma, JWT, Zod
### DB : Supabase (PostgreSQL), RLS, Realtime
### Paiement : M-Pesa API, Airtel Money API
### Maps : Google Maps SDK

---

## 🗃️ Base de Données Supabase
### `users`
- id
- fullname
- phone
- email
- role: client | restaurant | livreur | admin | super_admin

### `restaurants`
- id
- owner_id
- name
- address, lat, lng
- avatar_url
- is_open

### `menus`
- id
- restaurant_id
- name, price, description, image_url

### `orders`
- id
- user_id, restaurant_id
- delivery_address
- total_amount
- status

### `deliveries`
- id
- order_id, driver_id
- pickup_time
- delivered_time

### `payments`
- id
- order_id
- method
- transaction_id
- status

### RLS
- Client : ses commandes
- Restaurant : ses commandes
- Livreur : ses livraisons
- Super Admin : lecture globale

---

## 🧪 Installation

### Backend
```
cd api
npm install
npm run dev
```

### Web Client
```
cd apps/web
npm install
npm run dev
```

### Dashboard Restaurant
```
cd apps/restaurant-dashboard
npm install
npm run dev
```

### Admin Dashboard
```
cd apps/admin-dashboard
npm install
npm run dev
```

### Mobile
```
cd apps/mobile
npm install
npm start
```

---

## 🔧 Variables d’environnement
```
SUPABASE_URL=
SUPABASE_KEY=
MPESA_API_KEY=
AIRTEL_MONEY_KEY=
GOOGLE_MAPS_KEY=
JWT_SECRET=
```

---

## 📚 API Documentation
Endpoints dans : **/docs/api.md**
- Auth
- Restaurants
- Menus
- Commandes
- Livraisons
- Paiements
- Admin

---

## 🧩 Contribution
- Branches : main / dev / feat-*
- Commits : Conventional Commits
- PR : tests requis + description claire

---

## 🗺️ Roadmap
### ✔️ MVP
- Mobile client
- Web client
- Dashboard restaurant
- Backend API
- Paiement mobile
- Suivi livreur

### 🔜 V1.0
- Coupons
- Fidélité
- Mode dark/light
- Notifications avancées

### 🚀 V2.0
- Chat client
- QR Code Payment
- IA : recommandations culinaires

---

## 📄 Licence
MIT License © Chakula

---

## 🤝 Contact
- Email : support@chakula.com
- WhatsApp Business : +243 xxx xxx xxx
