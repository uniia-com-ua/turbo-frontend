import type {Meta, StoryObj} from "@storybook/react";
import {Banner} from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Landing/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/VEafRJoDYtEnT09ZGlG3xM/Uniia-Design-System?node-id=744-1198&t=lCqi02o9K7c0YjHZ-4",
    },
  },
  argTypes: {
    onPrimaryClick: {action: "primaryClicked"},
    onSecondaryClick: {action: "secondaryClicked"},
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Banner>;

/**
 * Стандартний банер з зображенням фону
 */
export const Default: Story = {
  args: {
    bannerImage: "../../../assets/landing/main_image.webp",
    title: "Карбуй освіту",
    subtitle: "Перша онлайн-платформа для студентів українських університетів",
    primaryButtonText: "Розпочати",
    secondaryButtonText: "Дізнатись більше",
  },
};

/**
 * Банер з альтернативним текстом
 */
export const Alternative: Story = {
  args: {
    bannerImage: "../../../assets/landing/main_image.webp",
    title: "Навчайся із задоволенням",
    subtitle: "Сучасні методики та інтерактивні матеріали для ефективного навчання",
    primaryButtonText: "Спробувати",
    secondaryButtonText: "Дізнатись про нас",
  },
};

/**
 * Мобільний вигляд банера
 */
export const Mobile: Story = {
  args: {
    bannerImage: "../../../assets/landing/main_image.webp",
    title: "Карбуй освіту",
    subtitle: "Перша онлайн-платформа для студентів українських університетів",
    primaryButtonText: "Розпочати",
    secondaryButtonText: "Дізнатись більше",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
