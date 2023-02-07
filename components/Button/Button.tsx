import ButtonProps from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ appearance, children }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
    >
      {children}
    </button>
  );
};
