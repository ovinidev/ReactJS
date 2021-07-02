import './App.css';
import { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';

const Posts = ({ posts }) => (
  <div key={posts.id} className="post">
    <h1>{posts.title}</h1>
    <p>{posts.body}</p>
  </div>
);

Posts.propTypes = {
  posts: P.shape({ // Sempre que for objeto utilizar o .shape
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        posts.map((posts) => (
          <Posts key={posts.id} posts={posts} />
        ));
      }, [posts])}

      { }
    </div>
  );
}

export default App;
