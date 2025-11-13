/**
 * Shared domain primitives to be reused across the apps and the API.
 */
export type UserRole = "client" | "restaurant" | "livreur" | "admin" | "super_admin";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RestaurantSummary {
  id: string;
  name: string;
  address: string;
  coordinates: Coordinates;
  isOpen: boolean;
  cuisineTags: string[];
}

export type OrderStatus =
  | "pending"
  | "accepted"
  | "preparing"
  | "ready"
  | "assigned"
  | "picked_up"
  | "delivered"
  | "cancelled";

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: string;
  code?: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
