import Main from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'qualquer coisa',
    description: 'whatever',
  },
  argTypes: {
    wrapperBackground: { control: 'color' },
  },
} as Meta;

export const FirstCase: Story = args => <Main {...args} />;

export const SecondCase: Story = args => <Main {...args} />;
