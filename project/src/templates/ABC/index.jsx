import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const ABC = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }, [history]);

  return (
    <div>
      <h1>Abc</h1>
      <h1>{slug}</h1>
      <h1>{id}</h1>

    </div>
  );
};

export default ABC;
