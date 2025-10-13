import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("renders label text", () => {
  render(<Label text="Name" />);
  expect(screen.getByText("Name")).toBeInTheDocument();
});

test("applies color styling", () => {
  render(<Label text="Email" color="blue" />);
  const label = screen.getByText("Email");
  expect(label).toHaveStyle("color: blue");
});

test("renders disabled label with gray color", () => {
  render(<Label text="Disabled" disabled />);
  const label = screen.getByText("Disabled");
  expect(label).toHaveStyle("color: #999");
});

export {};
