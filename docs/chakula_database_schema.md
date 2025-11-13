# Chakula — Database Schema (Supabase)

## Tables

### users
- id (uuid)
- fullname
- phone
- email
- role (client | restaurant | livreur | admin | super_admin)

### restaurants
- id
- owner_id → users
- name
- address
- lat, lng
- avatar_url
- is_open

### menus
- id
- restaurant_id
- name
- price
- description
- image_url

### orders
- id
- user_id
- restaurant_id
- delivery_address
- total_amount
- status

### order_items
- id
- order_id
- menu_id
- quantity
- subtotal

### deliveries
- id
- order_id
- driver_id
- pickup_time
- delivered_time
- status

### payments
- id
- order_id
- amount
- method
- transaction_id
- status

### ratings
- id
- user_id
- restaurant_id
- order_id
- stars
- comment

---

## RLS Rules
- Clients : accès uniquement à leurs données
- Restaurants : accès commandes liées
- Livreurs : livraisons assignées
- Super Admin : lecture globale

