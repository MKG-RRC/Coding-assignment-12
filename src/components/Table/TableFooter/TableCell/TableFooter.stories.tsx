import type { Meta, StoryObj } from "@storybook/react";

import { TableFooter } from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
  title: "Components/Table/TableFooter",
  component: TableFooter,
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    cells: ["Subtotal", "$1200", "3 items"],
  },
};

export const Colored: Story = {
  args: {
    cells: ["Grand Total", "$2450", "5 items"],
    backgroundColor: "#007bff",
    color: "#fff",
    bold: true,
  },
};

export const Minimal: Story = {
  args: {
    cells: ["Thank you for your order!"],
    bold: false,
  },
};
