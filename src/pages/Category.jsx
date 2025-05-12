import { useParams } from 'react-router';

export default function Category() {
  const { categoryId } = useParams();

  return <h1>{categoryId}</h1>;
}
