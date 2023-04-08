import { KeyboardEvent, useEffect, useState } from "react";
import styles from "./Rating.module.scss";
import RatingProps from "./Rating.props";
import Vector from "./Vector.svg";
import cn from "classnames";

export const Rating = ({
  setRating,
  rating,
  isEditable = false,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((e, i) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplayingRating(i + 1)}
          onMouseLeave={() => changeDisplayingRating(rating)}
          onClick={() => changeActualRating(i + 1)}
        >
          <Vector
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && onSpaceDown(i + 1, e)
            }
            tabIndex={isEditable ? 0 : -1}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const onSpaceDown = (
    desiredRating: number,
    e: KeyboardEvent<SVGAElement>
  ) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(desiredRating);
  };

  const changeActualRating = (desiredRating: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(desiredRating);
  };

  const changeDisplayingRating = (displayRating: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(displayRating);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
