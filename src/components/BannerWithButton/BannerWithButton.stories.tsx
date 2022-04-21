import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerWithButton from './BannerWithButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShopCircleComponentLibrary/BannerWithButton',
  component: BannerWithButton,
} as ComponentMeta<typeof BannerWithButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BannerWithButton> = (args) => <BannerWithButton />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}