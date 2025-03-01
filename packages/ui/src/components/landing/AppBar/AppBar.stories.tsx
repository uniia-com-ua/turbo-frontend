import type {Meta, StoryObj} from "@storybook/react";
import {AppBar} from "./AppBar";

const meta: Meta<typeof AppBar> = {
  title: "Landing/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/VEafRJoDYtEnT09ZGlG3xM/Uniia-Design-System?node-id=744-1397&t=5H7ymSTgaLgRgUx9-4",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    onLanguageChange: () => console.log("Змінити мову"),
    onStartClick: () => console.log("Розпочати"),
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    onLanguageChange: () => console.log("Змінити мову"),
    onStartClick: () => console.log("Розпочати"),
    isMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
