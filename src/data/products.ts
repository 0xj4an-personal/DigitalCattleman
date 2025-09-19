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
  // Vacas Paridas Collection
  {
    id: '1',
    nameKey: 'vacaParida1',
    price: 4500000,
    rating: 4.7,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '2',
    isBestSeller: true
  },
  {
    id: '2',
    nameKey: 'vacaParida2',
    price: 5200000,
    rating: 4.8,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '2',
    isNew: true
  },
  {
    id: '3',
    nameKey: 'vacaParida3',
    price: 4800000,
    originalPrice: 5500000,
    rating: 4.9,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '2',
    isNew: true
  },

  // Vacas Horras Collection
  {
    id: '4',
    nameKey: 'vacaHorra1',
    price: 3800000,
    rating: 4.6,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '3',
    isNew: true
  },
  {
    id: '5',
    nameKey: 'vacaHorra2',
    price: 4200000,
    rating: 4.7,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '3',
    isNew: true
  },
  {
    id: '6',
    nameKey: 'vacaHorra3',
    price: 4600000,
    originalPrice: 5200000,
    rating: 4.8,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'vaca',
    collectionId: '3',
    isBestSeller: true
  },

  // Novillas de Vientre Collection
  {
    id: '7',
    nameKey: 'novillaVientre1',
    price: 3200000,
    rating: 4.5,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'novilla',
    collectionId: '4',
    isBestSeller: true
  },
  {
    id: '8',
    nameKey: 'novillaVientre2',
    price: 3600000,
    rating: 4.6,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'novilla',
    collectionId: '4',
    isNew: true
  },
  {
    id: '9',
    nameKey: 'novillaVientre3',
    price: 3400000,
    originalPrice: 3800000,
    rating: 4.7,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'novilla',
    collectionId: '4',
    isNew: true
  },

  // Hembras de Levante Collection
  {
    id: '10',
    nameKey: 'hembraLevante1',
    price: 2800000,
    rating: 4.9,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'hembra',
    collectionId: '5',
    isNew: true
  },
  {
    id: '11',
    nameKey: 'hembraLevante2',
    price: 3100000,
    rating: 4.8,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'hembra',
    collectionId: '5',
    isBestSeller: true
  },
  {
    id: '12',
    nameKey: 'hembraLevante3',
    price: 3300000,
    originalPrice: 3800000,
    rating: 4.9,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'hembra',
    collectionId: '5',
    isBestSeller: true
  },

  // Machos de Levante Collection
  {
    id: '13',
    nameKey: 'machoLevante1',
    price: 2500000,
    rating: 4.4,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '6',
    isNew: true
  },
  {
    id: '14',
    nameKey: 'machoLevante2',
    price: 2700000,
    rating: 4.5,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '6',
    isNew: true
  },
  {
    id: '15',
    nameKey: 'machoLevante3',
    price: 2900000,
    originalPrice: 3200000,
    rating: 4.6,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '6',
    isBestSeller: true
  },

  // Machos de Ceba Collection
  {
    id: '16',
    nameKey: 'machoCeba1',
    price: 3200000,
    rating: 4.7,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '7',
    isNew: true
  },
  {
    id: '17',
    nameKey: 'machoCeba2',
    price: 3500000,
    rating: 4.8,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '7',
    isBestSeller: true
  },
  {
    id: '18',
    nameKey: 'machoCeba3',
    price: 3800000,
    originalPrice: 4200000,
    rating: 4.9,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'macho',
    collectionId: '7',
    isNew: true
  },

  // Toretes Collection
  {
    id: '19',
    nameKey: 'torete1',
    price: 1800000,
    rating: 4.6,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'torete',
    collectionId: '8',
    isNew: true
  },
  {
    id: '20',
    nameKey: 'torete2',
    price: 2000000,
    rating: 4.7,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'torete',
    collectionId: '8',
    isBestSeller: true
  },
  {
    id: '21',
    nameKey: 'torete3',
    price: 2200000,
    originalPrice: 2500000,
    rating: 4.8,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'torete',
    collectionId: '8',
    isNew: true
  },

  // Toros Collection
  {
    id: '22',
    nameKey: 'toro1',
    price: 5500000,
    rating: 4.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'toro',
    collectionId: '9',
    isBestSeller: true
  },
  {
    id: '23',
    nameKey: 'toro2',
    price: 6200000,
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'toro',
    collectionId: '9',
    isNew: true
  },
  {
    id: '24',
    nameKey: 'toro3',
    price: 6800000,
    originalPrice: 7500000,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
    categoryKey: 'toro',
    collectionId: '9',
    isBestSeller: true
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
