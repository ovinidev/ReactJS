import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts/index';
import './styles.css';

function App() {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
}

export default App;
