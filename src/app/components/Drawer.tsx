import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Sections/Footer";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";
import { NAV_LINKS } from "@/lib/constants/navigator";
import { useEffect, useState } from "react";

export interface IDrawer {
  open: boolean;
}

const Drawer = ({ open = false }: IDrawer) => {
  const [tempOpen, setTempOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) {
      // Temporarily open until it closes in animation
      setTimeout(() => setTempOpen(false), 550);
    } else {
      setTempOpen(true);
    }
  }, [open]);

  return tempOpen ? (
    <div
      className={twMerge(
        open ? "drawerIn" : "drawerOut",
        "fixed top-0 bottom-0 left-0 right-0 dark:bg-black z-10 pt-24"
      )}
    >
      <ul className="container max-w-2xl mx-auto text-center md:text-left px-5 xl:px-0">
        {NAV_LINKS.map((link, linkIndex) => (
          <li
            key={`nav-link-${linkIndex}`}
            data-aos="fade-left"
            data-aos-delay={linkIndex * 100 + 100}
          >
            <Link
              {...link}
              className={twMerge(
                "text-[4rem] leading-[4.5rem] font-bold uppercase transition-all xl:text-[5rem] xl:leading-[5rem]",
                pathname === link.href
                  ? "text-violet-700"
                  : "hover:text-violet-700"
              )}
            >
              <HackedText text={link.name} anaglyphOff />
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  ) : null;
};

export default Drawer;
