'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeSection({ children, className = '', delay = 0 }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduce delay on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const actualDelay = isMobile ? Math.min(delay, 50) : delay;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (actualDelay > 0) {
            requestAnimationFrame(() => {
              setTimeout(() => setIsVisible(true), actualDelay);
            });
          } else {
            setIsVisible(true);
          }
          observer.disconnect();
        }
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -20px 0px' 
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
