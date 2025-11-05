import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
    color: "#222",
    disabled: false,
  },
};

export const Colored: Story = {
  args: {
    text: "Email Address",
    color: "#007bff",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    disabled: true,
  },
};
