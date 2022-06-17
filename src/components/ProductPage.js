import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Navbar from "./Navbar";
import axios from "axios";
import { useStoreActions } from "easy-peasy";
import { motion } from "framer-motion";
import "../styles/productPage.scss";
import { CaretLeft } from "phosphor-react";
import postAction from "../handlers/postAction";
const buttonVariants = {
  on: {
    opacity: 1,
    pointerEvents: "all",
  },
  off: { opacity: 0.5, pointerEvents: "none" },
};
export default function ProductPage() {
  const addToCart = useStoreActions((actions) => actions.addToCart);
  const navigate = useNavigate();
  const productId = useParams().productId;
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedInventory, setSelectedInventory] = useState(null);
  useEffect(() => {
    if (!selectedSize) {
      return;
    }
    axios
      .get("http://localhost:3001/getinventory", {
        params: { product_id: productId, size_id: selectedSize.value },
      })
      .then((response) => {
        setSelectedInventory(response.data[0].product_inventory_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedSize, setSelectedSize]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getproduct", {
        params: { id: productId },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  useEffect(() => {
    if (!product) {
      return;
    }
    let sizeOptions = [];
    product.availableSizes.forEach((size) => {
      const option = {
        value: size.product_size_id,
        label: (
          <div className="size">
            <p>{size.uk + " UK"}</p>
            <p>{size.us + " US"}</p>
            <p>{size.cm + " CM"}</p>
          </div>
        ),
      };
      sizeOptions.push(option);
    });
    setSizes(sizeOptions);
    axios
      .get("http://localhost:3001/getothercolors", {
        params: { id: product.product_id },
      })
      .then((response) => {
        let colorOptions = [];
        response.data.forEach((color, id) => {
          colorOptions.push({
            value: color.product_variation_id,
            label: (
              <p className="color" style={{ margin: 0 }}>
                {color.color_name}
              </p>
            ),
          });
        });
        setColors(colorOptions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product, setProduct]);

  useEffect(() => {
    if (!selectedColor) {
      return;
    } else {
      navigate("/product/" + selectedColor.value);
    }
  }, [selectedColor]);

  function handleSetSelectedSize(selectedSize) {
    postAction(".select", "click", "Sizes", "true");
    postAction(".size", "click", "9.5 UK", "");
    setSelectedSize(selectedSize);
  }

  function handleSetSelectedColor(selectedColor) {
    postAction(".select", "click", "Colors", "true");
    postAction(".color", "click", "Yellow", "");
    setSelectedColor(selectedColor);
  }

  return (
    <div className="productPage page">
      <Navbar />
      <div className="productPageLinks">
        <Link to={"/"}>
          <div>
            <CaretLeft size={17} />
            <p>Home</p>
          </div>
        </Link>
        <Link to={"/products"}>
          <div>
            <p>Our products</p>
          </div>
        </Link>
      </div>
      {product && (
        <div className="productGrid">
          <div className="productInfo">
            <div className="productName">
              <p className="productProducer">{product.producer_name}</p>
              <p>{product.product_name}</p>
            </div>
            <div className="productDescription">
              <p>{product.description}</p>
            </div>
            <Select
              options={sizes}
              classNamePrefix="select"
              className="select"
              placeholder="Sizes"
              onChange={handleSetSelectedSize}
            />
            <Select
              defaultValue={productId}
              options={colors}
              classNamePrefix="select"
              className="select"
              placeholder="Colors"
              onChange={handleSetSelectedColor}
            />
            <div className="line" />
            <div className="productPrice">
              <div className="price">
                <p>$</p>
                <p>{product.price}</p>
              </div>
              <div>
                <p>Free shipping over $150</p>
              </div>
            </div>
            <div className="productButtons">
              <motion.div
                initial={"off"}
                variants={buttonVariants}
                animate={selectedSize ? "on" : "off"}
                className="toPurchase"
                onClick={() => {
                  if (!selectedInventory) {
                    return;
                  }
                  postAction(".toPurchase", "click", "", "true");
                  addToCart({
                    product_inventory_id: selectedInventory,
                  });
                }}
              >
                <p>Add to cart</p>
              </motion.div>
            </div>
          </div>
          <div className="productPictures">
            {product.pictures.map((picture, index) => (
              <div
                style={{
                  backgroundImage: `url(${picture.product_picture_url})`,
                }}
                id={"picture" + index}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
