import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function CreateList() {
  const navigate = useNavigate();

  const [item, setItem] = useState({
    item: "",
    quantity: "",
    unitValue: "",
  });

  const [state, setState] = useState({
    name: "",
    nameOfYourList: "",
    shoppingList: [],
  });

  function handleChangeState(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleChangeItem(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/Paulo", state);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column m-5">
          <h1 className="d-flex mb-5">Crie sua lista de compras</h1>
          <label htmlFor="name-input">Seu nome:</label>
          <input
            name="name"
            id="name-input"
            type="text"
            onChange={handleChangeState}
            required
          />
          <label htmlFor="nameOfYourList-input">Nome da sua lista:</label>
          <input
            name="nameOfYourList"
            id="nameOfYourList-input"
            type="text"
            onChange={handleChangeState}
            required
          />
        </div>
        <div className="d-flex flex-column m-5 ">
          <h2 className="mb-5">Insira os itens desejados</h2>
          <label htmlFor="item-input">Item:</label>
          <input
            name="item"
            id="item-input"
            type="text"
            onChange={handleChangeItem}
            value={item.item}
          />
          <label htmlFor="quantity">Quantidade:</label>
          <input
            name="quantity"
            id="quantity-input"
            type="number"
            onChange={handleChangeItem}
            value={item.quantity}
          />
          <label htmlFor="unitValue">Valor unitario:</label>
          <input
            name="unitValue"
            id="unitValue-input"
            type="number"
            onChange={handleChangeItem}
            value={item.unitValue}
          />
        </div>
        <div>
          <button
            className="btn btn-primary m-5"
            onClick={(e) => {
              e.preventDefault();
              toast.success("Seu item foi incluído com sucesso !");
              setState({
                ...state,
                shoppingList: [...state.shoppingList, item],
              });
              setItem({
                item: "",
                quantity: "",
                unitValue: "",
              });
            }}
          >
            Incluir Item
          </button>
          <button className="btn btn-secondary m-5" type="submit">
            Cadastrar lista
          </button>
        </div>
      </form>
    </>
  );
}
