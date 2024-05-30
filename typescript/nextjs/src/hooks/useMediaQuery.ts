import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const handleChange = () => {
      if (mounted) {
        setMatches(window.matchMedia(query).matches);
      }
    };

    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia(query);
      setMatches(matchMedia.matches);

      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      mounted = false;
      if (typeof window !== 'undefined') {
        window.matchMedia(query).removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export { useMediaQuery };
