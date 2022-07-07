import { Link } from "react-router-dom";
import carrinho from "../../assests/images/carrinho.jpg";

export function Card(props) {
  return (
    <div className="m-5" style={{ width: "18rem" }}>
      <img src={carrinho} className="card-img-top" alt="foto de carrinho" />
      <div className="m5">
        <h5 className="">{`Lista de ${props.name}`}</h5>
        <h5>{`${props.nameOfYourList}`}</h5>
        <Link to={`/list/${props.id}`} className="btn btn-primary">
          Veja a lista completa!
        </Link>
      </div>
    </div>
  );
}
