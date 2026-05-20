import { useState, useEffect } from "react"
import axios from 'axios';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Items from "./components/Items/Items";


function App() {


  const [allGodds, setAllGoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setAllGoods(response.data)
        setLoading(false)
        console.log(response.data);
      })
      .catch(error => {
        console.log('ошибка при загрузке ', error);
        setLoading(false)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Items allGoods={allGodds} />
      <Footer />
    </div>
  )
}

export default App
