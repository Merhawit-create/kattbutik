import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function CatDetails() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchCat() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=30");
      const data = await response.json();
      setCat(data.find((item) => item.id === id));
    }

    fetchCat();
  }, [id]);

  if (!cat) return <p>Laddar...</p>;



  const imageUrl =
  cat.imageUrl ||
  cat.image?.url ||
  (cat.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
    : "https://placehold.co/400x300?text=No+Image");
  //const imageUrl = cat.image?.url || "https://placehold.co/400x300?text=No+Image";

  return (
    <Card className="mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
      
      
      <Card.Img variant="top" src={imageUrl} alt={cat.name} />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>Ursprung: {cat.origin}</Card.Text>
        <Button onClick={() => addToCart(cat)}>Lägg till i kundvagn</Button>
      </Card.Body>
    </Card>
  );
}

export default CatDetails;