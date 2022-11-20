import { PropsWithChildren } from "react";

export type ScrollbarProps = {
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  variant?: string;
  size?: string;
  color?: string;
} & PropsWithChildren;
