import { Meta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";
export default {
    title: "Components/Molecules/StepItem",
    component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "1. Start",
    icon: "step1",
    desc1: 'pilih satu game',
    desc2: 'yg ingin kamu top up'

}