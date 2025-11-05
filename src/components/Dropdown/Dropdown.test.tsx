import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

test("renders dropdown label and options", () => {
  render(<Dropdown label="Pick" options={["A", "B"]} />);
  expect(screen.getByText("Pick")).toBeInTheDocument();
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("B")).toBeInTheDocument();
});

test("triggers onChange when selecting", () => {
  const handleChange = jest.fn();
  render(
    <Dropdown label="Pick" options={["A", "B"]} onChange={handleChange} />,
  );
  fireEvent.change(screen.getByDisplayValue("A"), { target: { value: "B" } });
  expect(handleChange).toHaveBeenCalled();
});

test("renders disabled dropdown", () => {
  render(<Dropdown label="Disabled" options={["One"]} disabled />);
  const select = screen.getByDisplayValue("One");
  expect(select).toBeDisabled();
});

export {};
