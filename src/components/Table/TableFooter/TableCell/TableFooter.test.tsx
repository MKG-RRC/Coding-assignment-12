import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

test("renders footer cells", () => {
  render(
    <table>
      <TableFooter cells={["Total", "$100"]} />
    </table>,
  );
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getByText("$100")).toBeInTheDocument();
});

test("applies bold style", () => {
  render(
    <table>
      <TableFooter cells={["Bold Footer"]} bold />
    </table>,
  );
  const footer = screen.getByText("Bold Footer").closest("tfoot");
  expect(footer).toHaveStyle("font-weight: 600");
});

export {};
