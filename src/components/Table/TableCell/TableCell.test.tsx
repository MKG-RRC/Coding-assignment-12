import { render, screen } from "@testing-library/react";

import { TableCell } from "./TableCell";

test("renders content correctly", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Cell Text" />
        </tr>
      </tbody>
    </table>,
  );
  expect(screen.getByText("Cell Text")).toBeInTheDocument();
});

test("applies bold style", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Bold" bold />
        </tr>
      </tbody>
    </table>,
  );
  expect(screen.getByText("Bold")).toHaveStyle("font-weight: 600");
});

test("applies alignment style", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Align Test" align="center" />
        </tr>
      </tbody>
    </table>,
  );
  expect(screen.getByText("Align Test")).toHaveStyle("text-align: center");
});

export {};
