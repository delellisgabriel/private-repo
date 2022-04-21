import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StateWithLabel from './StateWithLabel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShopCircleComponentLibrary/StateWithLabel',
  component: StateWithLabel,
} as ComponentMeta<typeof StateWithLabel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StateWithLabel> = (args) => <StateWithLabel {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  stats: [
    { label: 'Total Subscribers', value: '71,887' },
    { label: 'Avg. Open Rate', value: '56.87%' },
    { label: 'Avg. Click Rate', value: '12.87%' },
    { label: 'Number Of Apps Acquired', value: '5' },
  ]
}
