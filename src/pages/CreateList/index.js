import axios from "axios";
import { useEffect, useState } from "react";

export function CreateList() {
  const [state, setState] = useState({
    name: "",
    nameOfYourList: "",
    item: "",
    quantity: "",
    unitValue: "",
  });
  console.log(state);

  return (
    <>
      <form>
        <div className="d-flex flex-column m-5">
          <h1 className="d-flex mb-5">Crie sua lista de compras</h1>
          <label htmlFor="name-input">Seu nome:</label>
          <input name="name" id="name-input" type="text" />
          <label htmlFor="nameOfYourList-input">Nome da sua lista:</label>
          <input name="nameOfYourList" id="nameOfYourList-input" type="text" />
        </div>
        <div className="d-flex flex-column m-5 ">
          <h2 className="mb-5">Inclua os items desejados</h2>
          <label htmlFor="item-input">Item:</label>
          <input name="item" id="item-input" type="text" />
          <label htmlFor="quantity">Quantidade:</label>
          <input name="quantity" id="quantity-input" type="number" />
          <label htmlFor="unitValue">Valor unitario:</label>
          <input name="unitValue" id="unitValue-input" type="number" />
        </div>
        <div>
          <button className="btn btn-primary m-5">Incluir Item</button>
          <button className="btn btn-secondary m-5">Cadastrar lista</button>
        </div>
      </form>
    </>
  );
}
