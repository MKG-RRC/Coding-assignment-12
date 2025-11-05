import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Select an option",
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    options: ["Option A", "Option B"],
    disabled: true,
  },
};

export const WithAction: Story = {
  args: {
    label: "Action Dropdown",
    options: ["Red", "Green", "Blue"],
    onChange: (value: string) => alert(`Selected: ${value}`),
  },
};
