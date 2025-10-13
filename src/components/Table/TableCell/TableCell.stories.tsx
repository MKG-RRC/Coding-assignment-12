import type { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/Table/TableCell",
  component: TableCell,
};
export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    content: "Default Cell",
  },
};

export const CenterAligned: Story = {
  args: {
    content: "Centered Content",
    align: "center",
  },
};

export const BoldColored: Story = {
  args: {
    content: "Important Data",
    bold: true,
    color: "#007bff",
  },
};

export const FixedWidth: Story = {
  args: {
    content: "Fixed Width Cell",
    width: "150px",
  },
};
