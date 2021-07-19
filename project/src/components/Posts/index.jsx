import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { incrementCounter, decrementCounter } from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button 
        type="button"
        onClick={() => incrementCounter(counterDispatch)}>
          Counter {counterState.counter} +
      </button>

      <button 
        type="button"
        onClick={() => decrementCounter(counterDispatch)}>
          Counter {counterState.counter} +
      </button>

      <h1>Oi Vini</h1>
      {postsState.loading && (
        <p>
          <strong>Loading...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
