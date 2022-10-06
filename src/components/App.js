import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const API = 'http://localhost:3001/stocks';

function App() {

  const [stocks, setStocks] = useState([])
  const [portStocks, setPortStocks] = useState([])
  const [filteredStocks, setFilteredStocks] = useState([])

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => { 
        setStocks(data)
        setFilteredStocks(data)}
        )}, [])

  function addStock (stock) {
    setPortStocks([...portStocks, stock])
    // console.log('add stock', stock)
  }

  function removeStock (stock) {
    const removedStocks = portStocks.filter((item) => item.id !== stock.id)
    setPortStocks(removedStocks)
  }

  function sortByTicker (sortValue) {
    const sortedStocks = [...filteredStocks].sort((a, b) => {
      if (a[sortValue] < b[sortValue]) {
        return -1;
      }
      if (a[sortValue] > b[sortValue]) {
        return 1
      }
      return 0
    })
    setFilteredStocks(sortedStocks)
  }

  function filterStocks (type) {
    const stockFilt = stocks.filter(item => item.type === type)
    setFilteredStocks(stockFilt)
  }

  return (
    <div>
      <Header />
      <MainContainer stocks={filteredStocks} addStock={addStock} portStocks={portStocks} removeStock={removeStock} sortByTicker={sortByTicker} filterStocks={filterStocks}/>
    </div>
  );
}

export default App;
