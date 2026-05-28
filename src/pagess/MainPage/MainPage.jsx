import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import Items from "../../components/Items/Items";
import ShowFullItem from "../../components/ShowFullItem/ShowFullItem";
import { fetchItems } from "../../Store/itemsSlice";
import {
  setCategory,
  resetCategory,
  setFullItem,
  clearFullItem,
} from "../../Store/filterSlice";
import { useEffect } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

function MainPage({ addToOrder, deleteOrder }) {
  const dispatch = useDispatch();

  const { list: allGoods, categories } = useSelector((state) => state.items);

  const currentCategory = useSelector((state) => state.filter.currentCategory);
  const fullItem = useSelector((state) => state.filter.fullItem);

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

  const displayedItems =
    currentCategory === "all"
      ? allGoods
      : allGoods.filter((el) => el.category === currentCategory);

  return (
    <>
      <BackgroundImage />
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
    </>
  );
}

export default MainPage;
