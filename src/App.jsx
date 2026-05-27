import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./Store/cartSlice";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import MainPage from "./pagess/MainPage/MainPage";
import About from "./pagess/About/About";
import Contact from "./pagess/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.cart);
  const location = useLocation();

  const addToOrder = (item) => {
    dispatch(addItem(item));
  };

  const deleteOrder = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="wrapper">
      <Header order={order} deleteOrder={deleteOrder} />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <MainPage addToOrder={addToOrder} deleteOrder={deleteOrder} />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
