import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CatCard({ cat }) {
  // Get cat image URL
  const imageUrl = cat.imageUrl;


  return (
    <Card className="h-100 shadow-sm">
         {/* Cat image */}
      <Card.Img variant="top" src={imageUrl} alt={cat.name} />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>Ursprung: {cat.origin}</Card.Text>
         {/* Open details page */}
        <Button as={Link} to={`/cats/${cat.id}`} variant="primary">
          Visa detaljer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;