import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function List() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(list);
  console.log("--------->", id);
  console.log(useParams);

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
      <h1>Lista de {list.name} </h1>
      <h2>{list.nameOfYourList}</h2>

      <Link to={`/edit-list/${id}`} className="btn btn-primary">
        Editar
      </Link>

      <button onClick={handleDelete} className="btn btn-danger">
        Remover
      </button>
    </>
  );
}
