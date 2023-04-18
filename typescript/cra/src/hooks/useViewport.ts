import { useEffect, useState } from 'react';

type ReturnType = [number, number];
type DimensionsType = [number, number];

const useViewport = (): ReturnType => {
  const [dimensions, setDimensions] = useState<DimensionsType>([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export { useViewport };
