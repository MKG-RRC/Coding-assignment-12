import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders card with title and content", () => {
  render(<Card title="Hello" content="World" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
  expect(screen.getByText("World")).toBeInTheDocument();
});

test("applies disabled style", () => {
  render(<Card title="Disabled Card" content="Text" disabled />);
  const card = screen.getByText("Disabled Card").closest("div");
  expect(card).toHaveStyle("background-color: #f2f2f2");
});

export {};
