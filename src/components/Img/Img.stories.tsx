import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=600&q=80",
    alt: "Beautiful landscape",
    rounded: false,
    disabled: false,
  },
};

export const Rounded: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=80",
    alt: "Rounded sample image",
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=600&q=80",
    alt: "Disabled image",
    disabled: true,
  },
};
