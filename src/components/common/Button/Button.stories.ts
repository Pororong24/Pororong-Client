import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    variant: 'primary',
    children: '내용',
  },
};
