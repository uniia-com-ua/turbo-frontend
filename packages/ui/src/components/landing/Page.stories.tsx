import type {Meta, StoryObj} from "@storybook/react";
import {Page} from "./Page";

const meta: Meta<typeof Page> = {
  title: "Landing/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/VEafRJoDYtEnT09ZGlG3xM/Uniia-Design-System?node-id=0-1",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Page>;

/**
 * Базова сторінка з типовими налаштуваннями
 */
export const Default: Story = {
  args: {
    title: "Ласкаво просимо до Унії",
    description: "Унія — інноваційна платформа для покращення навчального процесу.",
  },
};

/**
 * Сторінка з альтернативним заголовком та описом
 */
export const Alternative: Story = {
  args: {
    title: "Відкрийте світ простого навчання",
    description: "Якщо ти студент, то ти вже знаєш, що навчання в університеті це не просто.",
  },
};

/**
 * Мобільний вигляд сторінки
 */
export const Mobile: Story = {
  args: {
    title: "Університет у вашій кишені",
    description: "Зручний мобільний доступ до всіх матеріалів платформи.",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
