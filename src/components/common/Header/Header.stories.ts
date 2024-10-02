import { Header } from '@/components/common/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderWithMenu: Story = {
  args: {
    showMenu: true,
  },
};

export const HeaderWithoutMenu: Story = {
  args: {
    showMenu: false,
  },
};
