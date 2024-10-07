import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '.';

const meta = {
  title: 'common/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Chips: Story = {
  args: {
    children: '내용',
  },
};
