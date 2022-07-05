import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="m-5" style={{ width: "18rem" }}>
      <img
        src="https://pt.dreamstime.com/vetor-s%C3%ADmbolo-ou-logotipo-liso-do-%C3%ADcone-carrinho-de-compras-ilustra%C3%A7%C3%A3o-simples-image141294852"
        className="card-img-top"
        alt="foto de carrinho"
      />
      <div className="m5">
        <h5>{`Lista de ${props.name}`}</h5>
        <h5>{`${props.nameOfYourList}`}</h5>
        <Link to={`/list/${props.id}`} class="btn btn-primary">
          Veja a lista completa!
        </Link>
      </div>
    </div>
  );
}
