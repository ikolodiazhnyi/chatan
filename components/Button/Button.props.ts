import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "ghost" | "primary";
  arrow?: "down" | "right" | "none";
}
