import React from "react";

function Stock({singleStock, updateStocks}) {

  const {ticker, name, price} = singleStock
  
  const handleClick = () => {
    updateStocks(singleStock)
    console.log('clicked')
  }

  return (
    <div onClick=/*{() => addStock(singleStock)}*/{handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
