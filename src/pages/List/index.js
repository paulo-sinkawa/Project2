import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function List() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/Paulo/${id}`
        );

        setList(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/error");
      }
    }

    console.log(setList);
    fetchList();
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/Paulo/${id}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return loading ? (
    <h1>Carregando a pagina ...</h1>
  ) : (
    <>
      <div className="m-5">
        <h1>Lista de {list.name} </h1>
        <h2>Nome da lista: {list.nameOfYourList}</h2>
        <h3 className="mt-5">Itens adicionados: </h3>
      </div>

      {list.shoppingList.map((currentList) => {
        return (
          <div className="m-5" key={currentList.item}>
            <p>Item: {currentList.item} </p>
            <p>Quantidade: {currentList.quantity} </p>
            <p>Valor: {currentList.unitValue} </p>
          </div>
        );
      })}

      <Link to={`/edit-list/${id}`} className="btn btn-primary m-5">
        Editar
      </Link>

      <button onClick={handleDelete} className="btn btn-danger">
        Remover
      </button>
    </>
  );
}
