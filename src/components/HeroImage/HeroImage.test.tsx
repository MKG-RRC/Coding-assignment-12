import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("renders hero title and subtitle", () => {
  render(<HeroImage imageUrl="test.jpg" title="Hello" subtitle="World" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
  expect(screen.getByText("World")).toBeInTheDocument();
});

test("renders hero image background", () => {
  render(<HeroImage imageUrl="test.jpg" title="Test" />);
  const wrapper = screen.getByText("Test").closest("div");
  expect(wrapper).toHaveStyle("background-image: url(test.jpg)");
});

test("applies grayscale when disabled", () => {
  render(<HeroImage imageUrl="test.jpg" title="Disabled" disabled />);
  const wrapper = screen.getByText("Disabled").closest("div");
  expect(wrapper).toHaveStyle("filter: grayscale(90%) opacity(0.6)");
});

export {};
