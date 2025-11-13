# Chakula API Documentation

Ce document décrit les endpoints principaux de l’API Chakula (NestJS).

## Auth
- POST /auth/register
- POST /auth/login

## Restaurants
- GET /restaurants
- GET /restaurants/:id

## Menus
- GET /restaurants/:id/menus
- POST /menus

## Commandes
- POST /orders
- GET /orders/user

## Livraisons
- PATCH /deliveries/:id/status

## Paiements
- POST /payments/mpesa
- POST /payments/airtel

## Admin
- GET /admin/overview
- GET /admin/users

