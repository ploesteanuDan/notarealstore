import { render, screen, cleanup } from "@testing-library/react";
import Product from "../components/Product";

test("test", () => {
  render(<Product />);
  const productElement = screen.getByTestId("prod-1");
  //expect(productElement).toBeInTheDocument();
});
