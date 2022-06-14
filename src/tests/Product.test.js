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
test("test", () => {
  render(
    <BrowserRouter>
      <Product product={dummy} />
    </BrowserRouter>
  );
  const productElement = screen.getByTestId("p1");
  expect(productElement).toBeInTheDocument();
  expect(productElement).toHaveTextContent("Adidas");
});