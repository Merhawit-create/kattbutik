import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CatCard({ cat }) {
  const imageUrl = cat.image?.url || "https://placehold.co/400x300?text=No+Image";

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={imageUrl} alt={cat.name} />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>Ursprung: {cat.origin}</Card.Text>
        <Button as={Link} to={`/cats/${cat.id}`} variant="primary">
          Visa detaljer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;