'use client';

import { ArrowRight, Zap, Shield, Users, ShoppingCart, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Logo from '@/components/Logo';
import VerificationPopup from '@/components/VerificationPopup';
import WalletConnect from '@/components/WalletConnect';
import { useTranslations } from 'next-intl';
import { useVerification } from '@/contexts/VerificationContext';
import { getFeaturedProducts } from '@/data/products';

// Get featured products from centralized data
const featuredProducts = getFeaturedProducts();


export default function Home() {
  const t = useTranslations();
  const { isVerified, setVerified } = useVerification();
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  // Show verification popup after 3 seconds if user is not verified
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVerified && typeof window !== 'undefined') {
        const hasSeenPopup = localStorage.getItem('hasSeenVerificationPopup');
        if (!hasSeenPopup) {
          setShowVerificationPopup(true);
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVerified]);

  const handleVerificationComplete = (verified: boolean) => {
    setVerified(verified);
    setShowVerificationPopup(false);
    if (verified) {
      localStorage.setItem('hasSeenVerificationPopup', 'true');
    }
  };

  const handleClosePopup = () => {
    setShowVerificationPopup(false);
    localStorage.setItem('hasSeenVerificationPopup', 'true');
  };

  return (
    <div className="min-h-screen bg-cream-natural dark:bg-bark-dark text-charcoal dark:text-white-natural transition-all duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-nature-gradient dark:bg-forest-gradient transition-all duration-500">
        {/* Nature Pattern Overlay */}
        <div className="absolute inset-0 nature-pattern opacity-20"></div>
        
        {/* Floating Nature Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-sage-green opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-wheat-gold opacity-15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-sunset-orange opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-8 flex-wrap">
            {/* Left Content */}
            <div className="flex-1 min-w-80">
              <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-br from-earth-brown via-forest-green to-sage-green dark:from-wheat-gold dark:via-sage-green dark:to-sky-blue bg-clip-text text-transparent animate-fade-in">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-charcoal dark:text-white-natural mb-8 leading-relaxed max-w-lg animate-slide-up">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row animate-slide-up">
                <Link href="/products">
                  <button className="group inline-flex items-center px-8 py-4 bg-earth-gradient text-white-natural font-semibold rounded-organic border-none cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base">
                    <span className="mr-2">{t('hero.shopNow')}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/collections">
                  <button className="group inline-flex items-center px-8 py-4 bg-transparent text-charcoal dark:text-white-natural font-semibold rounded-organic border-2 border-sage-green dark:border-wheat-gold cursor-pointer transition-all duration-300 hover:bg-sage-green hover:text-white-natural dark:hover:bg-wheat-gold dark:hover:text-charcoal text-base">
                    <Users className="mr-2 w-5 h-5" />
                    {t('hero.exploreCollections')}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="flex-none w-72 max-w-72">
              <div className="w-full h-72 bg-white-natural dark:bg-leaf-shadow rounded-organic shadow-2xl flex items-center justify-center transition-all duration-500 natural-texture card-hover">
                <div className="text-center relative z-10">
                  {/* Logo with Nature Glow */}
                  <div className="mb-6 animate-nature-glow">
                    <Logo 
                      width={90} 
                      height={90} 
                      className="rounded-xl mx-auto drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal dark:text-white-natural mb-2 transition-colors duration-300">
                    {t('hero.merchandise')}
                  </h3>
                  <p className="text-moss-green dark:text-sage-green text-sm font-medium transition-colors duration-300">
                    {t('hero.tagline')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F5F1E7] dark:bg-[#1C1C1C] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] dark:text-[#F5F1E7] mb-3 transition-colors duration-200">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3E7C4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] dark:text-[#F5F1E7] mb-3 transition-colors duration-200">
                {t('features.lightningFast.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
                {t('features.lightningFast.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3E7C4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] dark:text-[#F5F1E7] mb-3 transition-colors duration-200">
                {t('features.securePrivate.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
                {t('features.securePrivate.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3E7C4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] dark:text-[#F5F1E7] mb-3 transition-colors duration-200">
                {t('features.communityDriven.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
                {t('features.communityDriven.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Video Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal dark:text-white-natural mb-4 transition-colors duration-300">
              {t('hero.lote001Name')}
            </h2>
            <p className="text-lg text-moss-green dark:text-sage-green transition-colors duration-300">
              {t('hero.lote001Description')}
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white-natural dark:bg-leaf-shadow rounded-organic shadow-lg overflow-hidden mb-12 transition-all duration-500 natural-texture">
            <div className="aspect-video bg-soil-light dark:bg-bark-dark">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/assets/VacasParidas.png"
              >
                <source src="/assets/Video1.mp4" type="video/mp4" />
                {t('common.videoNotSupported', 'Tu navegador no soporta el elemento de video.')}
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal dark:text-white-natural mb-3 transition-colors duration-300">
                {t('hero.lote001Name')}
              </h3>
              <p className="text-moss-green dark:text-sage-green mb-4 transition-colors duration-300">
                {t('hero.lote001Description')}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-forest-green dark:text-sage-green">
                  $5.000.000 cCOP
                </span>
                <Link href="/products?collection=2">
                  <button className="px-6 py-2 bg-forest-green text-white-natural rounded-organic hover:bg-dark-green transition-all duration-300">
                    {t('common.viewDetails', 'Ver Detalles')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] dark:text-[#F5F1E7] mb-3 transition-colors duration-200">
              {t('products.featuredTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 transition-colors duration-200">
              {t('products.featuredSubtitle')}
            </p>
            <Link href="/products">
              <button className="inline-flex items-center px-5 py-2.5 bg-transparent text-[#3E7C4A] font-semibold rounded-lg border-2 border-[#3E7C4A] cursor-pointer transition-all duration-300 hover:bg-[#3E7C4A] hover:text-white text-sm">
                {t('products.viewAll')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#3E7C4A] to-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-6">
            <Logo 
              width={64} 
              height={64} 
              className="rounded-xl mx-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-3">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-[#F5F1E7] mb-6 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
            <Link href="/products">
              <button className="inline-flex items-center px-6 py-3 bg-[#E6B450] text-[#1C1C1C] font-semibold rounded-xl border-none cursor-pointer transition-all duration-300 hover:bg-[#d4a042] hover:shadow-lg text-base">
                {t('cta.startShopping')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/about">
              <button className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#1C1C1C] text-base">
                {t('cta.learnMore')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Verification Popup */}
      <VerificationPopup
        isOpen={showVerificationPopup}
        onClose={handleClosePopup}
        onVerificationComplete={handleVerificationComplete}
      />
    </div>
  );
}
