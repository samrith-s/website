import { useState } from "react";
import { CURRENT_SEASON, Seasons } from "../consts";
import { deleteCookie, setCookie } from "../utils/cookies";

import { cn } from "../utils/cn";

export type SeasonsToggleProps = {
  season?: Seasons;
  size?: number;
  detected?: boolean;
};

export function SeasonsToggle({
  season: seasonProp = Seasons.SUMMER,
  size = 24,
}: SeasonsToggleProps) {
  const [season, setSeason] = useState<Seasons>(seasonProp);

  const handleClick = () => {
    let newSeason = season;
    if (season === Seasons.SUMMER) {
      newSeason = Seasons.MONSOON;
    } else if (season === Seasons.MONSOON) {
      newSeason = Seasons.WINTER;
    } else {
      newSeason = Seasons.SUMMER;
    }

    if (newSeason === CURRENT_SEASON) {
      deleteCookie("season");
    } else {
      setCookie("season", newSeason);
    }

    document.documentElement.dataset.season = newSeason;

    setSeason(newSeason);
  };

  return (
    <button
      className={cn(
        "flex",
        "items-center",
        "gap-2",
        "rounded-lg",
        "w-32",
        "text-season",
        "cursor-pointer",
        "transition-colors",
        "duration-1000",
        "sm:text-base",
        "text-xs",
      )}
      onClick={handleClick}
    >
      <span className="shrink-0">
        {season === Seasons.SUMMER && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0m-1.453 13.748a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m-12.295 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0"
              opacity=".5"
            />
          </svg>
        )}

        {season === Seasons.MONSOON && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
            ></path>
            <path
              fill="currentColor"
              d="M19.124 18.255a2.24 2.24 0 0 0-1.351-1.369a2.25 2.25 0 0 0-3.364-2.977l-.802.801a2.25 2.25 0 0 0-3.698-.801l-2 2a2.24 2.24 0 0 0-.532.844c-.534.03-1.06.248-1.468.656l-1.268 1.268C3.091 18.04 2 16.528 2 14.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902"
            ></path>
            <path
              fill="currentColor"
              d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0a.746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m3.44 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"
            ></path>
          </svg>
        )}

        {season === Seasons.WINTER && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v11.38l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75"></path>
              <path
                d="M5.511 4.178a.75.75 0 0 1 .919.53l1.018 3.798L12 11.134l4.552-2.628l1.017-3.798a.75.75 0 1 1 1.45.389l-.63 2.349l1.896-1.095a.75.75 0 0 1 .75 1.3l-1.896 1.094l2.349.63a.75.75 0 1 1-.388 1.448l-3.798-1.018l-3.802 2.196l3.802 2.195l3.798-1.018a.75.75 0 1 1 .388 1.449l-2.35.63l1.897 1.094a.75.75 0 1 1-.75 1.3l-1.896-1.096l.63 2.35a.75.75 0 0 1-1.45.388l-1.017-3.798L12 12.867l-4.553 2.628l-1.017 3.798a.75.75 0 0 1-1.45-.388l.63-2.35l-1.896 1.095a.75.75 0 0 1-.75-1.299l1.896-1.095l-2.349-.629a.75.75 0 0 1 .388-1.449l3.798 1.018L10.5 12L6.698 9.805L2.9 10.823a.75.75 0 1 1-.389-1.449l2.35-.63L2.963 7.65a.75.75 0 0 1 .75-1.299L5.61 7.446l-.629-2.35a.75.75 0 0 1 .53-.918"
                opacity=".5"
              ></path>
            </g>
          </svg>
        )}
      </span>

      <div className="grid grid-flow-row justify-items-start shrink-0">
        <strong className="uppercase">{season}</strong>
      </div>
    </button>
  );
}
