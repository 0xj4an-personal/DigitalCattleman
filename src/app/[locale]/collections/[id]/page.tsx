import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { getCollectionById } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import { notFound } from 'next/navigation';
import CollectionHero from './CollectionHero';
import CollectionProducts from './CollectionProducts';

interface CollectionPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const resolvedParams = await params;
  const t = await getTranslations('collections');
  
  // Get collection data
  const collection = getCollectionById(resolvedParams.id);
  
  if (!collection) {
    notFound();
  }
  
  // Get products for this collection
  const products = getProductsByCollection(resolvedParams.id);
  
  return (
    <div className="min-h-screen bg-[#F5F1E7] dark:bg-[#1C1C1C] transition-colors duration-200">
      {/* Collection Hero Section */}
      <CollectionHero 
        collection={collection}
        productCount={products.length}
      />
      
      {/* Collection Products */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg mb-6 transition-colors duration-200">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-300 dark:bg-gray-600 rounded-2xl h-96"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <CollectionProducts 
              collection={collection}
              products={products}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all collections
export async function generateStaticParams() {
  const { allCollections } = await import('@/data/collections');
  
  return allCollections.map((collection) => ({
    id: collection.id,
  }));
}
