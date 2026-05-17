import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Primary Button",
    className: "px-6 py-3 bg-blue-600 text-white hover:bg-blue-500",
    disabled: false,
  },
  argTypes: {
    className: { control: "text" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

export const Primary = {};

export const Secondary = {
  args: {
    children: "Secondary Button",
    className: "px-6 py-3 bg-gray-700 text-white hover:bg-gray-600",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    disabled: true,
    className: "px-6 py-3 bg-blue-600 text-white",
  },
};
