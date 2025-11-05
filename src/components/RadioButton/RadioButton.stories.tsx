import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Select this option",
    name: "example",
    value: "option1",
  },
};

export const Checked: Story = {
  args: {
    label: "Selected option",
    name: "example",
    value: "option2",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    name: "example",
    value: "option3",
    disabled: true,
  },
};
