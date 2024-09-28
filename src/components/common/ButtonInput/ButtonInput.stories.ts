import type { Meta, StoryObj } from '@storybook/react';
import { ButtonInput } from '@/components/common/ButtonInput';
const meta = {
  title: 'common/ButtonInput',
  component: ButtonInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonInputs: Story = {
  args: {
    children: 'Text',
    width: '312px',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
  },
};
