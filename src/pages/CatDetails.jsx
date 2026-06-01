import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function CatDetails() {
  // Get cat id from URL
  const { id } = useParams();
   // Store selected cat
  const [cat, setCat] = useState(null);
   // Access cart function
  const { addToCart } = useCart();
 // Load selected cat data
  useEffect(() => {
    async function fetchCat() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=30");
      const data = await response.json();
       // Find matching cat by id
      setCat(data.find((item) => item.id === id));
    }

    fetchCat();
  }, [id]);
 // Show loading text before data is ready
  if (!cat) return <p>Laddar...</p>;

  const imageUrl =
  cat.imageUrl ||
  cat.image?.url ||
  (cat.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
    : "https://placehold.co/400x300?text=No+Image");

  return (
    <Card className="mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
      <Card.Img variant="top" src={imageUrl} alt={cat.name} />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>Ursprung: {cat.origin}</Card.Text>
         {/* Add cat to shopping cart */}
        <Button onClick={() => addToCart(cat)}>Lägg till i kundvagn</Button>
      </Card.Body>
    </Card>
  );
}

export default CatDetails;