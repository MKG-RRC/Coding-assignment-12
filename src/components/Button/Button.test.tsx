import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

test("renders button with label", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});

test("disables the button when disabled prop is true", () => {
  render(<Button label="Disabled" disabled />);
  const btn = screen.getByText("Disabled");
  expect(btn).toBeDisabled();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="Click" onClick={handleClick} />);
  fireEvent.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalled();
});

export {};
