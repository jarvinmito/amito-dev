import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="relative inline-flex w-full max-w-[16rem] group/button transition-all">
      <button
        className={twMerge(props.className, "cyberbutton text-xl leading-none")}
        style={{
          clipPath: "polygon(0 19%, 4% 0, 100% 0, 100% 58%, 91% 99%, 0 100%)",
        }}
      >
        {props.children}
        <div
          aria-hidden
          className="bg-violet-500 opacity-40 absolute -top-12 -left-8 h-14 w-[20rem] transition-all duration-300 -rotate-[15deg] -translate-y-14 group-hover/button:translate-y-36 "
        ></div>
        <div
          aria-hidden
          className="bg-violet-500 opacity-20 absolute -top-12 -left-8 h-14 w-[20rem] transition-all duration-300 -rotate-[20deg] -translate-y-14 group-hover/button:translate-y-36 delay-100"
        ></div>
      </button>
      <div
        aria-hidden
        className="cyberbox absolute -inset-1 -z-10 opacity-0 transition-all group-hover/button:opacity-100"
        // @ts-ignore
        style={{ "--w": "12px", "--c": "var(--mantine-color-violet-6" }}
      ></div>
    </div>
  );
};

export default Button;
