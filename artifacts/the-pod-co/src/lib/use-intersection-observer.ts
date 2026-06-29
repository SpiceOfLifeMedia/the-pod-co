import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return [elementRef, isVisible] as const;
}
