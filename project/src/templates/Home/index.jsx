import { useState } from 'react';
import { useAsync } from './use-async';

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();

  return json;
};

function App() {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }
  
  if (status === 'error') {
    return <pre>Error</pre>;
  }

  if (status === 'done') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
}

export default App;
