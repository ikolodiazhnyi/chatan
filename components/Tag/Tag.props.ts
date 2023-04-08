import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export default interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: "ghost" | "grey" | "green" | "red" | "primary";
  size?: "s" | "m";
  href?: string;
}
