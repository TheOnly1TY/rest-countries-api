import { memo } from "react";

export const Theme = memo(() => {
  return (
    <div className="flex justify-center items-center gap-1">
      <img src="/sun.svg" alt="mode_icon" />
      <p className="text-[12px] md:text-base text-[#111517] dark:text-white font-semibold font-display">
        Dark Mode
      </p>
    </div>
  );
});
