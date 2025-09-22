'use client';

import { useState } from 'react';
import { Search, Filter, Grid, List, SortAsc } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/data/products';
import { Collection } from '@/data/collections';

interface CollectionProductsProps {
  collection: Collection;
  products: Product[];
}

export default function CollectionProducts({ collection, products }: CollectionProductsProps) {
  const t = useTranslations('collections');
  const tProducts = useTranslations('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter and sort products
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let filtered = products;
    
    if (query) {
      filtered = products.filter(product =>
        product.nameKey.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Apply sorting
    filtered = sortProducts(filtered, sortBy);
    setFilteredProducts(filtered);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    const sorted = sortProducts(filteredProducts, sort);
    setFilteredProducts(sorted);
  };

  const sortProducts = (productsToSort: Product[], sort: string) => {
    const sorted = [...productsToSort];
    
    switch (sort) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  };

  return (
    <>
      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8 transition-colors duration-200">
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Buscar en ${t(`collectionItems.${collection.nameKey}.name`)}...`}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-base bg-white dark:bg-gray-700 text-[#1C1C1C] dark:text-[#F5F1E7] placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#3E7C4A] focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400 text-sm">{tProducts('sortBy')}:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="py-2 px-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm text-[#1C1C1C] dark:text-[#F5F1E7] focus:border-[#3E7C4A] focus:outline-none transition-colors duration-200"
              >
                <option value="newest">{tProducts('newest')}</option>
                <option value="price-low">{tProducts('priceLowToHigh')}</option>
                <option value="price-high">{tProducts('priceHighToLow')}</option>
                <option value="rating">{tProducts('highestRated')}</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-1 ml-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'border-[#3E7C4A] bg-[#3E7C4A] text-white' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'border-[#3E7C4A] bg-[#3E7C4A] text-white' 
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl text-center shadow-lg transition-colors duration-200">
          <h3 className="text-xl font-semibold text-[#1C1C1C] dark:text-[#F5F1E7] mb-2 transition-colors duration-200">
            {tProducts('noProductsFound')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-200">
            {tProducts('tryAdjustingFilters')}
          </p>
          <button
            onClick={() => handleSearch('')}
            className="py-3 px-6 bg-[#3E7C4A] text-white border-none rounded-xl cursor-pointer text-sm font-semibold hover:bg-[#2d5f3a] transition-all duration-200"
          >
            {tProducts('clearFilters')}
          </button>
        </div>
      ) : (
        <div className={`grid gap-8 mb-12 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-gray-600 dark:text-gray-400 transition-colors duration-200">
        <p>
          {tProducts('showingResults', { 
            count: filteredProducts.length,
            total: products.length 
          })} en {t(`collectionItems.${collection.nameKey}.name`)}
        </p>
      </div>
    </>
  );
}
