import { render, screen, cleanup } from "@testing-library/react";
import Product from "../components/Product";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const dummy = {
  product_variation_id: 1,
  product_picture_url:
    "https://images.unsplash.com/photo-1655143905566-b824848908c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  product_name: "Ultraboost",
  producer_name: "Adidas",
  price: 120,
};

test("should render product if props are given", () => {
  render(
    <BrowserRouter>
      <Product product={dummy} />
    </BrowserRouter>
  );
  const productElement = screen.getByTestId("product");
  expect(productElement).toHaveTextContent("Adidas");
  expect(productElement).toHaveTextContent("Ultraboost");
  expect(productElement).toHaveTextContent("$" + 120);
});

test("should NOT render product if props are NOT given", () => {
  render(
    <BrowserRouter>
      <Product />
    </BrowserRouter>
  );
  const productContainerElement = screen.getByTestId("productContainer");
  expect(productContainerElement).not.toHaveTextContent("Adidas");
});
