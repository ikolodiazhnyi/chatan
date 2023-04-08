import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
