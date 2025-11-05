import { render, screen } from "@testing-library/react";

import { RadioButton } from "./RadioButton";

test("renders radio button label", () => {
  render(<RadioButton label="Option A" name="test" value="A" />);
  expect(screen.getByText("Option A")).toBeInTheDocument();
});

test("disables radio button when disabled prop is true", () => {
  render(<RadioButton label="Disabled" name="test" value="B" disabled />);
  const radio = screen.getByRole("radio");
  expect(radio).toBeDisabled();
});
