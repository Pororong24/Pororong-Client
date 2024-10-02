import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/components/common/Dropdown';

const meta = {
  title: 'common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dropdowns: Story = {
  args: {
    items: ['카테고리 1', '카테고리 2', '카테고리 3'],
    width: '400px',
  },
};
