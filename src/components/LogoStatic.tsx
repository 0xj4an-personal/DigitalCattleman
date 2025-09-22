'use client';

import { useEffect, useState } from 'react';

interface LogoStaticProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function LogoStatic({ 
  width = 40, 
  height = 40, 
  className = '', 
  alt = 'Ganadero Digital Logo' 
}: LogoStaticProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  // Fallback if image fails to load
  if (imageError) {
    return (
      <div 
        className={`bg-[#3E7C4A] rounded-lg flex items-center justify-center text-white font-bold ${className}`}
        style={{ width, height }}
      >
        <span style={{ fontSize: Math.min(width, height) * 0.4 }}>
          GD
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <img
        src="/assets/Logo.png"
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-200 ${
          isDark ? 'brightness-0 invert' : ''
        }`}
        style={{
          filter: isDark ? 'brightness(0) invert(1)' : 'none',
          width: width,
          height: height,
          objectFit: 'contain'
        }}
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />
    </div>
  );
}
