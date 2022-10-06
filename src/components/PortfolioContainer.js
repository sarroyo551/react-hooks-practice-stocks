import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portStocks, updateStocks}) {

  const portStockComponents = portStocks.map((item) => <Stock key={item.id} singleStock={item} updateStocks={updateStocks}/>)
  


  return (
    <div>
      <h2>My Portfolio</h2>
      {portStockComponents}
    </div>
  );
}

export default PortfolioContainer;
