import { Routes, Route } from "react-router-dom";
import MainPage from "./pagess/MainPage/MainPage";
import About from "./pagess/About/About";
import Contact from "./pagess/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./Store/cartSlice";

function App() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.cart);

  const addToOrder = (item) => {
    dispatch(addItem(item));
  };

  const deleteOrder = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="wrapper">
      <Header order={order} deleteOrder={deleteOrder} />

      <Routes>
        <Route
          path="/"
          element={
            <MainPage addToOrder={addToOrder} deleteOrder={deleteOrder} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
