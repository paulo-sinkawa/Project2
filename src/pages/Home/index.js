import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Cards";

export function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const response = await axios.get("https://ironrest.herokuapp.com/Paulo");
      setList([...response.data]);
    }
    fetchList();
  }, []);

  return (
    <>
      <Link to="/create-list" className="btn btn-primary m-5">
        Crie sua lista de compras
      </Link>

      <h2 className="m-5">Listas criadas</h2>

      {list.map((currentList) => {
        return (
          <div key={currentList.name}>
            <Card
              name={currentList.name}
              id={currentList._id}
              nameOfYourList={currentList.nameOfYourList}
            />
          </div>
        );
      })}
    </>
  );
}
