import { useEffect, useState, useRef } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 2000));

      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        throw e;
      }
    };

    fetchData();

    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

function App() {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${
    postId}`, {
    headers: {
      abc: '200',
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleCLick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? result.map((p) => (
          <div
            key={`post-${p.id}`}
            onClick={() => handleCLick(p.id)}>
            <p>{p.title}</p>
          </div>
        )) : (
          <div
            onClick={() => handleCLick(result.id)}>
          <p>{result.title}</p>
        </div>
        )}

      </div>
    );
  }

  return <h1>Oi</h1>;
}

export default App;
