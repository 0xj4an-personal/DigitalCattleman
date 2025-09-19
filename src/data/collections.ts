export interface Collection {
  id: string;
  nameKey: string; // Key for translation
  descriptionKey: string; // Key for translation
  image: string;
  itemCount: number;
  rating: number;
  followers: number;
  createdAt: string;
  isFeatured?: boolean;
  creator: string;
}

export const allCollections: Collection[] = [
  {
    id: '2',
    nameKey: 'vacasParidasCollection',
    descriptionKey: 'vacasParidasCollection',
    image: '/assets/vacas-paridas.jpeg',
    itemCount: 12,
    rating: 4.8,
    followers: 1890,
    createdAt: '2024-02-03',
    isFeatured: true,
    creator: 'Ganadería Digital'
  },
  {
    id: '3',
    nameKey: 'vacasHorrasCollection',
    descriptionKey: 'vacasHorrasCollection',
    image: '/assets/vacas-horras.jpeg',
    itemCount: 15,
    rating: 4.7,
    followers: 2100,
    createdAt: '2024-01-28',
    creator: 'Ganadería Digital'
  },
  {
    id: '4',
    nameKey: 'novillasVientreCollection',
    descriptionKey: 'novillasVientreCollection',
    image: '/assets/novillas-vientre.jpeg',
    itemCount: 9,
    rating: 4.6,
    followers: 1560,
    createdAt: '2024-02-10',
    creator: 'Ganadería Digital'
  },
  {
    id: '5',
    nameKey: 'hembrasLevanteCollection',
    descriptionKey: 'hembrasLevanteCollection',
    image: '/assets/hembras-levante.jpeg',
    itemCount: 14,
    rating: 4.8,
    followers: 3200,
    createdAt: '2024-02-15',
    creator: 'Ganadería Digital'
  },
  {
    id: '6',
    nameKey: 'machosLevanteCollection',
    descriptionKey: 'machosLevanteCollection',
    image: '/assets/machos-levante.jpeg',
    itemCount: 18,
    rating: 4.7,
    followers: 2800,
    createdAt: '2024-02-18',
    creator: 'Ganadería Digital'
  },
  {
    id: '7',
    nameKey: 'machosCebaCollection',
    descriptionKey: 'machosCebaCollection',
    image: '/assets/machos-ceba.jpeg',
    itemCount: 22,
    rating: 4.5,
    followers: 4200,
    createdAt: '2024-02-20',
    creator: 'Ganadería Digital'
  },
  {
    id: '8',
    nameKey: 'toretesCollection',
    descriptionKey: 'toretesCollection',
    image: '/assets/toretes.jpeg',
    itemCount: 16,
    rating: 4.9,
    followers: 3500,
    createdAt: '2024-02-22',
    creator: 'Ganadería Digital'
  },
  {
    id: '9',
    nameKey: 'torosCollection',
    descriptionKey: 'torosCollection',
    image: '/assets/toros.jpeg',
    itemCount: 8,
    rating: 4.8,
    followers: 1800,
    createdAt: '2024-02-25',
    creator: 'Ganadería Digital'
  }
];

// Helper functions to get specific collection subsets
export const getFeaturedCollections = (): Collection[] => {
  return allCollections.filter(collection => collection.isFeatured);
};

export const getCollectionById = (id: string): Collection | undefined => {
  return allCollections.find(collection => collection.id === id);
};

export const getCollectionsByCreator = (creator: string): Collection[] => {
  return allCollections.filter(collection => collection.creator === creator);
};
