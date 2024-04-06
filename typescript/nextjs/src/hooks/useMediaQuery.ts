import { useEffect, useState } from 'react';

const getMatches = (query: string): boolean => {
  const [ maches, setMatches ] = useState<string[]>();

  return window.matchMedia(query).matches;
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }

    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export { useMediaQuery };
