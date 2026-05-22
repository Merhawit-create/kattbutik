import { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import CatCard from "../components/CatCard";
import PaginationControls from "../components/PaginationControls";

function Cats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const catsPerPage = 10;

  useEffect(() => {
    async function fetchCats() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=30");
      const data = await response.json();

      const catsWithImages = data.map((cat) => ({
  ...cat,
  imageUrl:
    cat.image?.url ||
    (cat.reference_image_id
      ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
      : "https://placehold.co/400x300?text=No+Image"),
}));

setCats(catsWithImages);


      //setCats(data);
    }

    fetchCats();
  }, []);

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCats.length / catsPerPage);
  const startIndex = (page - 1) * catsPerPage;
  const visibleCats = filteredCats.slice(startIndex, startIndex + catsPerPage);

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <section>
      <h1>Katter</h1>

      <Form.Control
        className="mb-4"
        type="text"
        placeholder="Sök katt, t.ex. Ben"
        value={search}
        onChange={handleSearch}
      />

      <Row>
        {visibleCats.map((cat) => (
          <Col key={cat.id} xs={12} md={6} lg={6} className="mb-4">
            <CatCard cat={cat} />
          </Col>
        ))}
      </Row>

      <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  );
}

export default Cats;