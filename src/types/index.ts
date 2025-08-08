// Common TypeScript interfaces and types used across the application

export interface Product {
  id: string | number;
  name: string;
  price: number;
  buyPrice?: number;
  onSalePrice?: number;
  imageUrl?: string;
  brand?: string;
  category?: string;
  description?: string;
  [key: string]: any;
}

export interface NavigationSubCategory {
  href: string;
  label: string;
  subCat?: NavigationSubCategory[];
}

export interface NavigationItemWithCategory {
  key: string;
  values: string[];
}

export interface NavigationItemWithLink {
  href: string;
  label: string;
  subCat?: NavigationSubCategory[];
}

export type NavigationItem =
  | NavigationItemWithLink
  | NavigationItemWithCategory;

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
