import { Meta } from "@storybook/react";
import Input, { inputProps } from "../../../../components/atoms/input";
export default {
    title: "Components/atoms/input",
    component: Input,
} as Meta;

const Template = (args: inputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Nama Lengkap"
}