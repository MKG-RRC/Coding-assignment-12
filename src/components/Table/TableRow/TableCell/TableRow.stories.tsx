import type { Meta, StoryObj } from "@storybook/react";

import { TableRow } from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/Table/TableRow",
  component: TableRow,
};
export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    cells: ["Mark Garcia", "mark@example.com", "Developer"],
  },
};

export const Striped: Story = {
  args: {
    cells: ["Jane Doe", "jane@example.com", "Designer"],
    striped: true,
    index: 1,
  },
};

export const Hoverable: Story = {
  args: {
    cells: ["Click Me", "Active Row", "Interactive"],
    hoverable: true,
    onClick: () => alert("Row clicked!"),
  },
};
