import type { Meta, StoryObj } from "@storybook/react";

import { TableHeader } from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: ["Name", "Email", "Role"],
  },
};

export const Colored: Story = {
  args: {
    headers: ["ID", "Product", "Price"],
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export const Sticky: Story = {
  args: {
    headers: ["Date", "Event", "Location"],
    sticky: true,
    backgroundColor: "#222",
    color: "#fff",
  },
};
