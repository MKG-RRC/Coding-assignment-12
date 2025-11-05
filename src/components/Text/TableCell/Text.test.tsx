import { render, screen } from "@testing-library/react";

import { Text } from "./Text";

test("renders text content", () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("applies bold weight", () => {
  render(<Text content="Bold Text" weight="bold" />);
  const text = screen.getByText("Bold Text");
  expect(text).toHaveStyle("font-weight: bold");
});

test("renders disabled text as gray", () => {
  render(<Text content="Disabled Text" disabled />);
  const text = screen.getByText("Disabled Text");
  expect(text).toHaveStyle("color: #999");
});

export {};
