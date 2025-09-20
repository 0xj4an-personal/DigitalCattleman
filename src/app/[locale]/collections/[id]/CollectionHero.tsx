'use client';

import { Star, Users, Calendar, Heart, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Collection } from '@/data/collections';
import { useState } from 'react';

interface CollectionHeroProps {
  collection: Collection;
  productCount: number;
}

export default function CollectionHero({ collection, productCount }: CollectionHeroProps) {
  const t = useTranslations('collections');
  const [isLiked, setIsLiked] = useState(false);
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t(`collectionItems.${collection.nameKey}.name`),
          text: t(`collectionItems.${collection.nameKey}.description`),
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={collection.image}
          alt={t(`collectionItems.${collection.nameKey}.name`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-[#3E7C4A] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Colección Premium
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t(`collectionItems.${collection.nameKey}.name`)}
              </h1>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                {t(`collectionItems.${collection.nameKey}.description`)}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-5 h-5 text-[#E6B450] fill-current" />
                    <span className="text-2xl font-bold">{collection.rating}</span>
                  </div>
                  <p className="text-sm text-gray-300">Calificación</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="w-5 h-5 text-[#3E7C4A]" />
                    <span className="text-2xl font-bold">{collection.followers.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-300">Seguidores</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Calendar className="w-5 h-5 text-[#3E7C4A]" />
                    <span className="text-2xl font-bold">{productCount}</span>
                  </div>
                  <p className="text-sm text-gray-300">Productos</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-6 py-3 bg-[#3E7C4A] hover:bg-[#2d5f3a] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explorar Productos
                </button>
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1C1C1C] ${
                    isLiked ? 'bg-white text-[#1C1C1C]' : ''
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Favorito' : 'Agregar a Favoritos'}
                </button>
                <button 
                  onClick={handleShare}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1C1C1C]"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartir
                </button>
              </div>
            </div>
            
            {/* Right Content - Collection Image */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <img
                  src={collection.image}
                  alt={t(`collectionItems.${collection.nameKey}.name`)}
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <p className="text-white text-sm opacity-80">
                    Creado por <span className="font-semibold">{collection.creator}</span>
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    {new Date(collection.createdAt).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
