import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

test("renders image with alt text", () => {
  render(<Img src="test.jpg" alt="Test image" />);
  const img = screen.getByAltText("Test image");
  expect(img).toBeInTheDocument();
});

test("applies rounded corners", () => {
  render(<Img src="test.jpg" alt="Rounded" rounded />);
  const img = screen.getByAltText("Rounded");
  expect(img).toHaveStyle("border-radius: 12px");
});

test("applies grayscale when disabled", () => {
  render(<Img src="test.jpg" alt="Disabled" disabled />);
  const img = screen.getByAltText("Disabled");
  expect(img).toHaveStyle("filter: grayscale(90%) opacity(0.6)");
});

export {};
