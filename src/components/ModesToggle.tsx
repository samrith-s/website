import { useEffect, useState } from "react";

import { Modes } from "../consts";

export type ModeProps = {
  size?: number;
};

export function ModesToggle({ size = 17 }: ModeProps) {
  const [mode, setMode] = useState<Modes>(Modes.LIGHT);

  useEffect(() => {
    if (window?.MODE) {
      // window.MODE is set by an inline script, so it can only be read after hydration.
      // oxlint-disable-next-line react/set-state-in-effect
      setMode(window.MODE as Modes);
    }
  }, []);

  const next = mode === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;

  return (
    <button
      type="button"
      className="mode-toggle"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={() => {
        setMode((prev) => {
          const newMode = prev === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;
          localStorage.setItem("mode", newMode);
          document.documentElement.classList.remove(prev);
          document.documentElement.classList.add(newMode);
          window.MODE = newMode;

          return newMode;
        });
      }}
    >
      <span className="mode-icon" data-visible={mode === Modes.LIGHT}>
        {/* sun */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
        </svg>
      </span>

      <span className="mode-icon" data-visible={mode === Modes.DARK}>
        {/* moon */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a6.8 6.8 0 0 0 10.9 10.9Z" />
        </svg>
      </span>
    </button>
  );
}
