import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/VEafRJoDYtEnT09ZGlG3xM/Uniia-Design-System?node-id=264-804&t=pVcwE4LNq3BWgBp5-4",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Базова кнопка з основними стилями
 */
export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Button",
  },
};

/**
 * Другорядна кнопка
 */
export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    children: "Button",
  },
};

/**
 * Кнопка з контуром
 */
export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    children: "Button",
  },
};

/**
 * Текстова кнопка
 */
export const Text: Story = {
  args: {
    variant: "text",
    color: "primary",
    children: "Button",
  },
};

/**
 * Велика кнопка
 */
export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

/**
 * Маленька кнопка
 */
export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

/**
 * Вимкнена кнопка
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
