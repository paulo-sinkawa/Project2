import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Cards";

export function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const response = await axios.get("https://ironrest.herokuapp.com/Paulo");
      console.log(response.data);
      setList([...response.data]);
    }
    fetchList();
  }, []);

  return (
    <>
      <h1>Projeto React</h1>
      <Link to="/create-list" className="btn btn-primary">
        Crie sua lista de compras
      </Link>

      <h2>Listas criadas</h2>

      {list.map((currentList) => {
        return (
          <Card
            name={currentList.name}
            id={currentList._id}
            nameOfYourList={currentList.nameOfYourList}
          />
        );
      })}
    </>
  );
}
