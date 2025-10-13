import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: "This is a simple text component.",
    size: "medium",
    color: "#222",
    weight: "normal",
    disabled: false,
  },
};

export const LargeBold: Story = {
  args: {
    content: "This text is larger and bold.",
    size: "large",
    weight: "bold",
    color: "#007bff",
  },
};

export const SmallDisabled: Story = {
  args: {
    content: "This text is small and disabled.",
    size: "small",
    disabled: true,
  },
};
