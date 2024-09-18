import { format } from "date-fns";
import { AllHTMLAttributes, useRef } from "react";
import HackedText from "../Branding/Cyberpunk/HackedText";
import { ROUTES } from "@/app/lib/constants";
import { useParallaxContext } from "@/app/lib/context/parallax.context";

const Header = ({ children }: AllHTMLAttributes<HTMLAllCollection>) => {
  const { headerRef } = useParallaxContext();
  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-20 w-full top-0 h-20 bg-bottom flex flex-row items-center"
      >
        <div className="container mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-12 items-center pb-4">
            <div className="col-span-3">
              <a
                aria-label="Amito"
                className="cursor-pointer"
                href={ROUTES.LANDING.HOME}
              >
                <span aria-hidden>
                  <HackedText
                    text="&lt;/\mito&gt;"
                    anaglyphOff
                    className="font-quattro font-bold"
                  />
                </span>
              </a>
            </div>
            <div className="col-span-7 xl:col-span-6 text-center px-1 xl:px-0">
              <p className="text-xs flex flex-row flex-wrap gap-x-2 justify-center items-center">
                Available to work{" "}
                <span
                  aria-hidden
                  className="flex bg-lime-400 rounded-full h-2 w-2 relative before:absolute before:-inset-px before:content-[''] before:rounded-full before:h-2.5 before:w-2.5 before:bg-lime-400 before:animate-ping"
                ></span>{" "}
                <span>
                  <span className="hidden xl:inline">Based in</span>{" "}
                  <span className="font-bold">
                    Philippines {format(new Date(), "h:mm a")} (UTC+8)
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        {children}
      </header>
    </>
  );
};

export default Header;
