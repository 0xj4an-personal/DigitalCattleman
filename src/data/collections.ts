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
    image: '/assets/VacasParidas.png',
    itemCount: 1,
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
    image: '/assets/VacasHorras.png',
    itemCount: 0,
    rating: 4.7,
    followers: 2100,
    createdAt: '2024-01-28',
    creator: 'Ganadería Digital'
  },
  {
    id: '4',
    nameKey: 'novillasVientreCollection',
    descriptionKey: 'novillasVientreCollection',
    image: '/assets/NovillasVientre.png',
    itemCount: 0,
    rating: 4.6,
    followers: 1560,
    createdAt: '2024-02-10',
    creator: 'Ganadería Digital'
  },
  {
    id: '5',
    nameKey: 'hembrasLevanteCollection',
    descriptionKey: 'hembrasLevanteCollection',
    image: '/assets/HembrasLevante.png',
    itemCount: 0,
    rating: 4.8,
    followers: 3200,
    createdAt: '2024-02-15',
    creator: 'Ganadería Digital'
  },
  {
    id: '6',
    nameKey: 'machosLevanteCollection',
    descriptionKey: 'machosLevanteCollection',
    image: '/assets/MachoLevante.png',
    itemCount: 0,
    rating: 4.7,
    followers: 2800,
    createdAt: '2024-02-18',
    creator: 'Ganadería Digital'
  },
  {
    id: '7',
    nameKey: 'machosCebaCollection',
    descriptionKey: 'machosCebaCollection',
    image: '/assets/MachoCeba.png',
    itemCount: 0,
    rating: 4.5,
    followers: 4200,
    createdAt: '2024-02-20',
    creator: 'Ganadería Digital'
  },
  {
    id: '8',
    nameKey: 'toretesCollection',
    descriptionKey: 'toretesCollection',
    image: '/assets/Toretes.png',
    itemCount: 0,
    rating: 4.9,
    followers: 3500,
    createdAt: '2024-02-22',
    creator: 'Ganadería Digital'
  },
  {
    id: '9',
    nameKey: 'torosCollection',
    descriptionKey: 'torosCollection',
    image: '/assets/Toros.png',
    itemCount: 0,
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
