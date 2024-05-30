import { useEffect, useState } from 'react';

type ReturnType = [number, number];
type DimensionsType = [number, number];

const useViewport = (): ReturnType => {
  const isClient = typeof window === 'object'; // Check if we are in the browser environment
  const [dimensions, setDimensions] = useState<DimensionsType>(isClient ? [window.innerHeight, window.innerWidth] : [0, 0]);

  useEffect(() => {
    if (!isClient) return; // Do nothing if not in the browser environment

    const handleResize = (): void => {
      setDimensions([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return dimensions;
};

export { useViewport };
