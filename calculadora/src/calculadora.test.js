import { render, screen } from "@testing-library/react";
import Calculadora from "./calculadora";

test("renders learn react link", () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
