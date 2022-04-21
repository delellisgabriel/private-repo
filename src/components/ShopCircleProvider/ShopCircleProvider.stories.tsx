import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ShopCircleProvider from "./ShopCircleProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ShopCircleComponentLibrary/ShopCircleProvider",
  component: ShopCircleProvider,
} as ComponentMeta<typeof ShopCircleProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShopCircleProvider> = (args) => <ShopCircleProvider {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <h1>Provider 😀</h1>,
};