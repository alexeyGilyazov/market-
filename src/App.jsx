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
import { addItem, removeItem } from "./Store/cartSlice"; // импортируем actions
import { useEffect } from "react";

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
  const cart = useSelector((state) => state.cart); // получаем корзину

  // Загрузка товаров
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const chooseCategory = (category) => {
    if (category === "all") {
      dispatch(resetCategory());
    } else {
      dispatch(setCategory(category));
    }
  };

  const resetFilter = () => {
    dispatch(resetCategory());
  };

  const onShowItem = (item) => {
    if (item) {
      dispatch(setFullItem(item));
    } else {
      dispatch(clearFullItem());
    }
  };

  // Фильтрация товаров по категории
  const displayedItems =
    currentCategory === "all"
      ? allGoods
      : allGoods.filter((el) => el.category === currentCategory);

  // Добавление товара в корзину
  const addToOrder = (item) => {
    dispatch(addItem(item));
  };

  // Удаление товара из корзины
  const deleteOrder = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="wrapper">
      <Header order={cart} deleteOrder={deleteOrder} />

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
