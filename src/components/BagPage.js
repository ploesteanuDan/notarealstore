import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/bagPage.scss";
import { useStoreActions, useStoreState } from "easy-peasy";
import { CaretRight } from "phosphor-react";
import axios from "axios";
export default function BagPage() {
  const [inventoryIds, setInventoryIds] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    surname: "",
  });
  const cart = useStoreState((state) => state.cart);
  function postOrder() {
    let items = [];
    cart.forEach((item) => {
      items.push(item.product_inventory_id);
    });
    axios
      .post("http://localhost:3001/postorder", null, {
        params: { ...userData, items },
      })
      .then((response) => {
        console.log("params", { ...userData, items });
        console.log("sent status", response.status);
      })
      .catch((err) => {
        console.log(err);
      });
    let test = { ...userData, items: 1 };
    console.log("test", test);
  }
  useEffect(() => {
    if (!cart.length) {
      return;
    }

    let inventory_id_array = [];
    cart.forEach((product) =>
      inventory_id_array.push(product.product_inventory_id)
    );
    inventory_id_array = inventory_id_array.join(",");
    axios
      .get("http://localhost:3001/getcartproducts", {
        params: { inventory_id_array: '"' + inventory_id_array + '"' },
      })
      .then((response) => {
        setCartProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cart]);

  return (
    <div className="bag page">
      <Navbar />
      <div className="bagGrid">
        <div className="bagForm">
          <p className="bagTitle">One more step</p>
          <p className="description">
            Fill in with your personal data and move to the payment process with
            Stripe
          </p>
          {localStorage.getItem("user_id") ? (
            <></>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Surname"
                onChange={(e) =>
                  setUserData({ ...userData, surname: e.target.value })
                }
              />
              <div className="line" />
            </>
          )}

          <input type="text" placeholder="City" />
          <input type="text" placeholder="Adress" />
          <input type="text" placeholder="Adress (optional)" />
          <div className="line" />
          <div
            className="button"
            onClick={() => {
              postOrder();
            }}
          >
            <p>To Stripe payment</p>
            <CaretRight size={17} />
          </div>
        </div>

        <div className="bagProducts">
          <p className="bagTitle">Your shopping bag</p>
          {cartProducts.length ? (
            <p className="description">
              These are all the products stored in your bag. One more step and
              they're all yours!
            </p>
          ) : (
            <p className="description">No products in your cart so far</p>
          )}
          {cartProducts.length ? (
            <div className="products">
              {cartProducts &&
                cartProducts.map((product, index) => (
                  <div className="product" key={index}>
                    <div className="productContent">
                      <img
                        src={product.product_picture_url}
                        alt={product.product_name}
                      />
                      <div className="productName">
                        <p>{product.producer_name}</p>
                        <p>{product.product_name}</p>
                      </div>
                      <div className="productSize">
                        <p>Size</p>
                        <p>{product.us}</p>
                        <p>US</p>
                      </div>
                      <div className="productPrice">
                        <p>$</p>
                        <p>{product.price}</p>
                      </div>
                    </div>
                    <div
                      className="line"
                      style={{
                        display:
                          index === cartProducts.length - 1 ? "none" : "block",
                      }}
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div className="products noProducts" />
          )}
        </div>
      </div>
    </div>
  );
}
