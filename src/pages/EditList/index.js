import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export function EditList() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    nameOfYourList: "",
    shoppingList: [],
    item: "",
    quantity: "",
    unitValue: "",
  });

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/Paulo/${id}`
        );

        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }

    fetchList();
  }, [id]);

  function handleChangeState(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...state };
      delete clone._id;

      await axios.put(`https://ironrest.herokuapp.com/Paulo/${id}`, clone);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/Paulo/${id}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column m-5">
          <h1 className="d-flex mb-5">Edite sua lista de compras</h1>
          <label htmlFor="name-input">Seu nome:</label>
          <input
            name="name"
            id="name-input"
            type="text"
            onChange={handleChangeState}
            value={state.name}
            required
          />
          <label htmlFor="nameOfYourList-input">Nome da sua lista:</label>
          <input
            name="nameOfYourList"
            id="nameOfYourList-input"
            type="text"
            onChange={handleChangeState}
            value={state.nameOfYourList}
            required
          />
        </div>

        <div className="m-5">
          {state.shoppingList.length > 0 ? (
            state.shoppingList.map((currentList) => {
              return (
                <div className="m-5" key={currentList.item}>
                  <p>Item: {currentList.item} </p>
                  <p>Quantidade: {currentList.quantity} </p>
                  <p>Valor: {currentList.unitValue} </p>
                </div>
              );
            })
          ) : (
            <p>Sua array está vazia</p>
          )}
          <button onClick={handleDelete} className="btn btn-danger">
            Remover lista completa
          </button>
        </div>

        <div className="d-flex flex-column m-5 ">
          <h2 className="mb-5">Insira mais itens na sua lista</h2>
          <label htmlFor="item-input">Item:</label>
          <input
            name="item"
            id="item-input"
            type="text"
            onChange={handleChangeState}
            value={state.item}
          />
          <label htmlFor="quantity">Quantidade:</label>
          <input
            name="quantity"
            id="quantity-input"
            type="number"
            onChange={handleChangeState}
            value={state.quantity}
          />
          <label htmlFor="unitValue">Valor unitario:</label>
          <input
            name="unitValue"
            id="unitValue-input"
            type="number"
            onChange={handleChangeState}
            value={state.unitValue}
          />
        </div>
        <div className="m-5">
          <button
            className="btn btn-primary m-5"
            onClick={(e) => {
              e.preventDefault();
              toast.success("Seu item foi incluído com sucesso !");
              setState({
                ...state,
                shoppingList: [...state.shoppingList, state],
                item: "",
                quantity: "",
                unitValue: "",
              });
            }}
          >
            Incluir Item
          </button>
          <button className="btn btn-secondary m-5" type="submit">
            Editar lista
          </button>
        </div>
      </form>
    </>
  );
}
