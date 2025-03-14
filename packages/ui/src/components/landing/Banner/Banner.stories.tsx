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
    backgroundImage:
      "https://lh5.googleusercontent.com/5qa12m5N0C7HPInX8wVRvKBXV_SSP8usDLzo84TqxWQ3Jv1PVYCo3xGRuaEg5iUDu97dh3KhcxKFKrvpqbFYfocr35GKGc7vw46GppHhdtgkRFa5eHw_uNjWEvEPDjqoYm4NJobS",
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
    backgroundImage:
      "https://lh5.googleusercontent.com/5qa12m5N0C7HPInX8wVRvKBXV_SSP8usDLzo84TqxWQ3Jv1PVYCo3xGRuaEg5iUDu97dh3KhcxKFKrvpqbFYfocr35GKGc7vw46GppHhdtgkRFa5eHw_uNjWEvEPDjqoYm4NJobS",
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
    backgroundImage:
      "https://lh5.googleusercontent.com/5qa12m5N0C7HPInX8wVRvKBXV_SSP8usDLzo84TqxWQ3Jv1PVYCo3xGRuaEg5iUDu97dh3KhcxKFKrvpqbFYfocr35GKGc7vw46GppHhdtgkRFa5eHw_uNjWEvEPDjqoYm4NJobS",
    title: "Карбуй освіту",
    subtitle: "Перша онлайн-платформа для студентів українських університетів",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
