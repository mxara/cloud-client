import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import axios from 'axios'

function App() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/stocks')
      .then((response) => {
        setStocks(response.data)
      })
  }, [])

  return (
    <div className="App">
      I am React

      {
        stocks ? (
          <ul>
            {stocks.map((stock) => {
              return <li>{stock.title} - {stock.price}</li>
            })}
          </ul>
        ) : ""}
    </div>
  );
}

export default App;
