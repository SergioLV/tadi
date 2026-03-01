'use client';

import { useState, useEffect } from 'react';

export default function LiveActivityIndicator() {
  const [count, setCount] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.max(8, Math.min(19, next));
      });
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
      </span>
      <p className="text-xs text-text-medium">
        <span className="font-semibold text-accent">{count}</span> personas evaluando su plan ahora mismo
      </p>
    </div>
  );
}
