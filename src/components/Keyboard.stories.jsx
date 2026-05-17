import { Keyboard } from "./Keyboard";
import { ALPHABET } from "../hooks/useHangman";

const baseKeys = ALPHABET;
const baseEntropies = baseKeys.map((_, index) => {
  const value = 4 - index * 0.08;
  return Number(Math.max(0.4, value).toFixed(1));
});

const meta = {
  title: "Game/Keyboard",
  component: Keyboard,
  argTypes: {
    keys: { control: "object" },
    entropies: { control: "object" },
    usedKeys: { control: "object" },
    onKeyPress: { control: false },
  },
  args: {
    keys: baseKeys,
    entropies: baseEntropies,
    usedKeys: ["a", "e", "s"],
    onKeyPress: () => {},
  },
};

export default meta;

export const Default = {
  args: {
    entropies: undefined,
  },
};

export const WithEntropy = {
  args: {
    entropies: baseEntropies,
  },
};

export const ManyUsed = {
  args: {
    usedKeys: ["a", "e", "s", "t", "r", "o", "n", "i", "l", "d"],
  },
};
