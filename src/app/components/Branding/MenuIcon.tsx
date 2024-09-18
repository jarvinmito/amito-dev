"use client";
import { twMerge } from "tailwind-merge";

export interface IMenuIcon {
  active: boolean;
  onToggle: () => void;
}

const MenuIcon = ({ active = false, onToggle }: IMenuIcon) => {
  return (
    <div
      className="absolute cursor-pointer w-16 h-4 top-1/2 right-0 z-10 -mt-5 text-white"
      onClick={onToggle}
    >
      <svg
        className="absolute top-0 left-0"
        width="50"
        viewBox="0 0 50 18"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L49 17H1"
          stroke="currentColor"
          strokeLinecap="round"
          className={twMerge(
            active ? "menu-icon-a-active" : "menu-icon-a-inactive"
          )}
        />
      </svg>
      <svg
        className="absolute top-0 left-0"
        width="50"
        viewBox="0 0 50 18"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H49L1 17"
          stroke="currentColor"
          strokeLinecap="round"
          className={twMerge(
            active ? "menu-icon-b-active" : "menu-icon-b-inactive"
          )}
        />
      </svg>
      {/* <div
        className={twMerge(
          "absolute h-px w-16 bg-white top-0 transition-all transform-gpu",
          active ? "translate-y-2 -rotate-[373deg]" : ""
        )}
      ></div>
      <div
        className={twMerge(
          "absolute h-px w-16 bg-white bottom-0 transition-all transform-gpu",
          active ? "-translate-y-2 rotate-[193deg]" : ""
        )}
      ></div> */}
    </div>
  );
};

export default MenuIcon;
