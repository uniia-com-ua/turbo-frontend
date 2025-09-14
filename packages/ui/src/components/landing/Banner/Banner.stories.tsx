import type {Meta, StoryObj} from "@storybook/react";
import {InfoBanner} from "./Banner";

const meta: Meta<typeof InfoBanner> = {
  title: "Landing/InfoBanner",
  component: InfoBanner,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/VEafRJoDYtEnT09ZGlG3xM/Uniia-Design-System?node-id=744-1198&t=lCqi02o9K7c0YjHZ-4",
    },
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoBanner>;

/**
 * Стандартний банер з зображенням фону
 */
export const Default: Story = {
  args: {
    title: "Карбуй освіту",
    subtitle: "Перша онлайн-платформа для студентів українських університетів",
    Buttons: [
      {id: 1, label: "Розпочати", variant: "contained", size: "large"},
      {id: 2, label: "Дізнатись більше", variant: "outlined", size: "large", isGlass: true},
    ],
  },
};

/**
 * Банер з альтернативним текстом
 */
export const Alternative: Story = {
  args: {
    title: "Навчайся із задоволенням",
    subtitle: "Сучасні методики та інтерактивні матеріали для ефективного навчання",
    Buttons: [
      {id: 1, label: "Спробувати", variant: "contained", size: "large"},
      {id: 2, label: "Дізнатись про нас", variant: "outlined", size: "large", isGlass: true},
    ],
  },
};

/**
 * Мобільний вигляд банера
 */
export const Mobile: Story = {
  args: {
    title: "Карбуй освіту",
    subtitle: "Перша онлайн-платформа для студентів українських університетів",
    Buttons: [
      {id: 1, label: "Розпочати", variant: "contained", size: "large"},
      {id: 2, label: "Дізнатись більше", variant: "outlined", size: "large", isGlass: true},
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
