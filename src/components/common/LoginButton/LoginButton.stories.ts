import type { Meta, StoryObj } from '@storybook/react';
import { LoginButton } from '.';

const meta = {
  title: 'common/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Kakao: Story = {
  args: {
    variant: 'kakao',
    children: 'Kakao로 3초만에 로그인하기',
  },
};

export const Google: Story = {
  args: {
    variant: 'google',
    children: 'Google로 3초만에 로그인하기',
    width: '274px',
    height: '56px',
  },
};
