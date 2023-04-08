import cn from "classnames";
import ButtonProps from "./Button.props";
import styles from "./Button.module.scss";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.ghost]: appearance === "ghost",
        [styles.primary]: appearance === "primary",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
