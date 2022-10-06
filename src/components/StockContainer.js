import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, updateStocks}) {

  const stockComponents = stocks.map(singleStock => <Stock key={singleStock.id} singleStock={singleStock} updateStocks={updateStocks}/>)


  return (
    <div>
      <h2>Stocks</h2>
      {stockComponents}
    </div>
  );
}

export default StockContainer;
