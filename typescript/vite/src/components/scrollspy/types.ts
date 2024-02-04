import { ReactNode } from "react";

export interface IScrollspyProps {
  className?: string;
  target: string;
  offset?: number;
  children: ReactNode;
}

export interface IScrollspyAnchorProps {
  className?: string;
  offset?: number;
  active?: number;
  path?: string;
  children: ReactNode;
}
