import { render, screen, fireEvent } from "@testing-library/react";
import { TableRow } from "./TableRow";

test("renders all cell values", () => {
  render(<table><tbody><TableRow cells={["A", "B", "C"]} /></tbody></table>);
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("B")).toBeInTheDocument();
  expect(screen.getByText("C")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<table><tbody><TableRow cells={["Click"]} onClick={handleClick} hoverable /></tbody></table>);
  fireEvent.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalled();
});

export {};
