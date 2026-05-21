import { Button } from "react-bootstrap";

function PaginationControls({ page, totalPages, setPage }) {
  return (
    <div className="d-flex justify-content-center gap-3 mt-4">
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Föregående
      </Button>

      <span>Sida {page} av {totalPages || 1}</span>

      <Button disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)}>
        Nästa
      </Button>
    </div>
  );
}

export default PaginationControls;