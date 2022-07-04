import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/create-list" className="btn btn-primary">
        Crie sua lista de compras
      </Link>
    </>
  );
}
