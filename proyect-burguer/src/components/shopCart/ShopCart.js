import React from "react";

const ShopCart = ({ mostrar, onClick, lista, deleteItem }) => {
  let suma = 0;
  lista.map((item, i) => {
    return (suma = suma + parseFloat(item.precio));
  });
  // console.log(suma);

  return (
    <div className="shopcart">
      <div className="button-container">
        <button className="mostrar-list" onClick={() => onClick(this)}>
          {mostrar ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      <div className="shoplist">
        <h3 className="shopList-title">Listado del pedido</h3>
        <ul>
          {lista.map((item, index) => (
            <div className="itemRow" key={index}>
              <li className="listItem">
                {item.titulo} - {item.precio}
              </li>

              <button
                className="listItemButton"
                onClick={deleteItem.bind(this, index)}
              >
                x
              </button>
            </div>
          ))}
          <p className="listLine"></p>
          <div className="itemRow">
            <h5>precio final</h5>

            <p>{suma.toFixed(2)} $</p>
            <p></p>
          </div>
          <button className="buttonpay">Pagar Ahora</button>
        </ul>
      </div>
    </div>
  );
};

export default ShopCart;
