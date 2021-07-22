import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);
    
    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

function App() {
  const huge = useMediaQuery('(min-width: 980px');
  const background = huge ? 'green' : 'red';
  
  return (
    huge ? (
      <div style={{ background }}>
        Oi
      </div>
    ) : (
      <div style={{ background }}>
        XAU
      </div>
    ));
}

export default App;
