import { useParams, useNavigate } from 'react-router';
import { Button, Container } from 'react-bootstrap';

export default function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h1>{categoryId}</h1>
      <Button variant="primary" onClick={handleGoHome}>
        Retour à la page d'accueil
      </Button>
    </Container>
  );
}
