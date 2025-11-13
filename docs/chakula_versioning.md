# Chakula — Versioning Sémantique & Changelog

Ce document définit la stratégie officielle de versionnement et de gestion du changelog pour la plateforme Chakula (Web + Mobile + API + Dashboards).

---

# 1. Versioning Sémantique (SemVer)
Chakula utilise le standard **Semantic Versioning 2.0.0** :

```
MAJOR.MINOR.PATCH
```

### 1.1 MAJOR (X.0.0)
Incrémenté lorsque :
- Une fonctionnalité majeure est ajoutée
- Une rupture de compatibilité (breaking change) est introduite
- Une refonte importante de l’architecture ou du modèle de données

**Exemples :**
- Passage du backend REST → microservices
- Nouvelle architecture Supabase
- Nouvelle interface complète mobile et web

---

### 1.2 MINOR (0.X.0)
Incrémenté lorsque :
- Une nouvelle fonctionnalité est ajoutée
- Une amélioration non-breaking est déployée
- De nouveaux modules sont introduits

**Exemples :**
- Ajout du programme fidélité
- Intégration du mode dark/light
- Ajout du chat client
- Nouvelle section dans le dashboard admin

---

### 1.3 PATCH (0.0.X)
Incrémenté lorsque :
- Un bug est corrigé
- Une optimisation interne est faite
- Une mise à jour mineure n'affectant pas les fonctionnalités

**Exemples :**
- Fix duplication panier
- Correction de geocoding
- Patch UI de la page paiement

---

# 2. Règles de Versioning Par Projet
### Mobile App → `app-mobile`
- Suivre SemVer complet
- Chaque release doit avoir un tag GitHub + Release Notes

### Web Client → `app-web`
- Versioning indépendant
- Releases fréquentes (CI/CD)

### Dashboard Restaurant & Admin
- Versions mineures groupées

### Backend API → `api`
- Version critique (impact directe sur apps)
- Toute rupture API → MAJOR obligatory

### Base de données (Supabase)
- Versionner les migrations Prisma
- Toute modification breaking → MAJOR dans le backend

---

# 3. Gestion Officielle du Changelog
Chaque version doit être documentée dans :  
📄 `/CHANGELOG.md`

Structure :

```
## [VERSION] - YYYY-MM-DD
### Added
- Fonctionnalités ajoutées

### Changed
- Modifications ou améliorations

### Fixed
- Bugs corrigés

### Removed
- Fonctionnalités retirées
```

---

# 4. Exemple de Changelog Réel
```
## [1.3.0] - 2025-01-14
### Added
- Système de coupons et réductions
- Vue revenus restaurant dans dashboard

### Changed
- Amélioration performances API commandes
- Optimisation images plats

### Fixed
- Résolution bug géolocalisation Android
- Fix duplication commande rapide
```

---

# 5. Convention de Commits
Pour aligner le changelog avec les commits :

```
feat: nouvelle fonctionnalité
fix: correction de bug
docs: documentation
style: style, formatage
refactor: changement interne sans nouvelle feature
perf: optimisation
test: ajout ou correction de tests
chore: maintenance
```

---

# 6. Tags GitHub
Chaque release doit avoir :
- Un tag : `v1.2.0`
- Un résumé officiel
- Les sections Added / Changed / Fixed / Removed

Format recommandé :
```
v1.2.0 — Coupons System Release
```

---

# 7. Processus de Release
1. PR validée
2. Tests passés (CI)
3. Merge dans `main`
4. Génération automatique du changelog
5. Tag GitHub créé
6. Déploiement auto (Vercel / Expo / Railway)

---

# Conclusion
Ce système de versionnement permet :
- une clarté totale pour l’équipe,
- une maintenance efficace,
- une transparence pour la communauté open-source,
- une gestion propre des releases sur mobile & web.
