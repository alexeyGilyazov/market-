// src/App.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";
import { fetchItems } from "./Store/ItemsSlice";
import {
  setCategory,
  resetCategory,
  setFullItem,
  clearFullItem,
} from "./Store/filterSlice";

function App() {
  const dispatch = useDispatch();

  // Получение данных из Redux
  const {
    list: allGoods,
    categories,
    loading,
    error,
  } = useSelector((state) => state.items);

  const currentCategory = useSelector((state) => state.filter.currentCategory);
  const fullItem = useSelector((state) => state.filter.fullItem);

  const [order, setOrder] = useState([]);

  // Загрузка товаров
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // Обработчик выбора категории
  const chooseCategory = (category) => {
    if (category === "all") {
      dispatch(resetCategory());
    } else {
      dispatch(setCategory(category));
    }
  };

  // Обработчик сброса фильтра
  const resetFilter = () => {
    dispatch(resetCategory());
  };

  // Обработчик отображения полного товара
  const onShowItem = (item) => {
    if (item) {
      dispatch(setFullItem(item));
    } else {
      dispatch(clearFullItem());
    }
  };

  // Фильтрация товаров по выбранной категории
  const displayedItems =
    currentCategory === "all"
      ? allGoods
      : allGoods.filter((el) => el.category === currentCategory);

  // Добавление в заказ
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

  return (
    <div className="wrapper">
      <Header
        order={order}
        deleteOrder={(id) => setOrder(order.filter((el) => el.id !== id))}
      />

      <Categories
        allCategory={categories}
        chooseCategory={chooseCategory}
        resetFilter={resetFilter}
        currentCategory={currentCategory}
      />

      <Items
        allGoods={displayedItems}
        addToOrder={addToOrder}
        onShowItem={onShowItem}
      />

      {fullItem && (
        <ShowFullItem
          onShowItem={() => onShowItem(null)}
          addToOrder={addToOrder}
          fullItem={fullItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
