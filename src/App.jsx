import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";

function App() {
  const [allGoods, setAllGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);



  const addToOrder = (orderGood) => {
    setOrder((prev) => {
      const exist = prev.find((item) => item.id === orderGood.id);
      if (exist) {
        return prev;
      } else {
        return [...prev, orderGood];
      }
    });
  };

  const deleteOrder = id => {
    setOrder(order.filter(el => el.id !== id))
  }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllGoods(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ошибка при загрузке ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header order={order} deleteOrder={deleteOrder} />
      <Items allGoods={allGoods} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
