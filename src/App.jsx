import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";
import { fetchItems } from "./Store/ItemsSlice";

function App() {
  const dispatch = useDispatch();
  const {
    list: allGoods,
    categories,
    loading,
    error,
  } = useSelector((state) => state.items);

  // const [loading, setLoading] = useState(true);
  // const [allGoods, setAllGoods] = useState([]);
  const [order, setOrder] = useState([]);
  // const [allCategory, setAllCategory] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

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

  const deleteOrder = (id) => {
    setOrder(order.filter((el) => el.id !== id));
  };

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setAllGoods(response.data);
  //       setLoading(false);
  //       const categories = response.data.map((item) => item.category);
  //       const uniqueCategories = Array.from(new Set(categories));
  //       setAllCategory(uniqueCategories);
  //     })
  //     .catch((error) => {
  //       console.log("ошибка при загрузке ", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const chooseCategory = (category) => {
    setCurrentCategory(category);
    setCurrentItems(allGoods.filter((el) => el.category === category));
  };

  const resetFilter = () => {
    setCurrentCategory("all");
    setCurrentItems([]);
  };

  const onShowItem = (item) => {
    console.log(item);
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header order={order} deleteOrder={deleteOrder} />
      <Categories
        allCategory={categories}
        chooseCategory={chooseCategory}
        resetFilter={resetFilter}
        currentCategory={currentCategory}
      />
      <Items
        allGoods={currentItems.length > 0 ? currentItems : allGoods}
        addToOrder={addToOrder}
        onShowItem={onShowItem}
      />
      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          addToOrder={addToOrder}
          fullItem={fullItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
