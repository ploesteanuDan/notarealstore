import "../styles/app.scss";
import Home from "../components/Home";
import BagPage from "../components/BagPage";
import ProductPage from "../components/ProductPage";
import Footer from "../components/Footer";
import { StoreProvider, createStore, action } from "easy-peasy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const store = createStore({
  cart: [],
  addToCart: action((state, payload) => {
    console.log("payload", payload);
    state.cart.push(payload);
    console.log(payload);
  }),
  resetCart: action((state, payload) => ({
    ...initialState,
  })),
});

const initialState = store.getState();

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoppingbag" element={<BagPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
      <Footer />
    </div>
  );
}

export default App;
