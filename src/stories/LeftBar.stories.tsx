import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LeftBar } from "../App/LeftBar";
import { css } from "@emotion/css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LeftBar/LeftBar",
  component: LeftBar,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    onPageChange: fn(),
    className: css({
      height: 400,
    })
  },
} satisfies Meta<typeof LeftBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {
  args: {
    page: "home",
  },
};

export const WithAccountSelected: Story = {
  args: {
    page: "account",
  },
};

