import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShopCircleComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Solid Button',
  variant: 'solid',
  size: 'lg',
  isDisabled: false,
  colorScheme: 'green',
};

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
  size: 'lg',
  isDisabled: false,
  colorScheme: 'green',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: 'Ghost button',
  variant: 'ghost',
  size: 'lg',
  isDisabled: false,
  colorScheme: 'green',
}

export const Link = Template.bind({})
Link.args = {
  children: 'Link button',
  variant: 'link',
  size: 'lg',
  isDisabled: false,
  colorScheme: 'green',
}
