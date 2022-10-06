import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, addStock, portStocks, removeStock, sortByTicker, filterStocks}) {

  return (
    <div>
      <SearchBar sortByTicker={sortByTicker} filterStocks={filterStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} updateStocks={addStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portStocks={portStocks} updateStocks={removeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
