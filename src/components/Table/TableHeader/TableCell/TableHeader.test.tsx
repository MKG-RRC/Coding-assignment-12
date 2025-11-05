import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("renders all header titles", () => {
  render(
    <table>
      <TableHeader headers={["Name", "Email", "Role"]} />
    </table>,
  );
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Role")).toBeInTheDocument();
});

test("applies background color", () => {
  render(
    <table>
      <TableHeader headers={["Item"]} backgroundColor="blue" />
    </table>,
  );
  const header = screen.getByText("Item").closest("thead");
  expect(header).toHaveStyle("background-color: blue");
});

export {};
