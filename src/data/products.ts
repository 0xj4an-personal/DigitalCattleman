export interface Product {
  id: string;
  nameKey: string; // Key for translation
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  categoryKey: string; // Key for translation (cap, tshirt, hoodie)
  collectionId: string; // ID of the collection
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const allProducts: Product[] = [
  // Lote 001 - Vacas Paridas con Crías
  {
    id: '1',
    nameKey: 'lote001',
    price: 5000000,
    rating: 4.8,
    reviewCount: 15,
    image: '/assets/VacasParidas.png',
    categoryKey: 'lote',
    collectionId: '2', // Vacas Paridas Collection
    isBestSeller: true,
    isNew: true
  }
];

// Helper functions to get specific product subsets
export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.isBestSeller || product.isNew).slice(0, 6);
};

export const getProductsByCategory = (categoryKey: string): Product[] => {
  return allProducts.filter(product => product.categoryKey === categoryKey);
};

export const getProductsByCollection = (collectionId: string): Product[] => {
  return allProducts.filter(product => product.collectionId === collectionId);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getCollections = (): string[] => {
  return Array.from(new Set(allProducts.map(product => product.collectionId)));
};

export const getCategories = (): string[] => {
  return Array.from(new Set(allProducts.map(product => product.categoryKey)));
};