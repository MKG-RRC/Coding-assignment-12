import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("renders UI Garden title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Demo StoryBook UI Component Library/i);
  expect(titleElement).toBeInTheDocument();
});
