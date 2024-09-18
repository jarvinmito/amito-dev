import {
  GITHUB_PROFILE,
  GOOGLE_PROFILE,
  LINKEDIN_PROFILE,
  MOBILE_NUMBER,
} from "@/app/lib/constants";
import { useParallaxContext } from "@/app/lib/context/parallax.context";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconDownload,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";

const footerIconStyle = {
  height: 44,
  width: 44,
};

const Footer = () => {
  const { footerRef } = useParallaxContext();
  return (
    <footer ref={footerRef} className="px-5 xl:px-0 pb-5">
      <div className="container mx-auto flex flex-col gap-20 py-8">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-8">
            <h5 className="hidden md:flex">Follow Me</h5>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6 flex flex-row gap-6 md:gap-3 items-center justify-center md:flex-col md:gap-5 md:items-start">
                <div className="flex flex-row items-center gap-6 md:gap-3">
                  <Link href={LINKEDIN_PROFILE} target="_blank">
                    <IconBrandLinkedin className="w-7 h-7 md:w-9 md:h-9" />
                  </Link>
                  <Link href={GITHUB_PROFILE} target="_blank">
                    <IconBrandGithub className="w-7 h-7 md:w-9 md:h-9" />
                  </Link>
                </div>
                <Link
                  href="/AmitoCV2024.pdf"
                  download={`AmitoCV${new Date().getFullYear()}`}
                  target="_blank"
                  className="inline-flex flex-row items-center gap-3"
                >
                  <IconDownload className="w-7 h-7 md:w-9 md:h-9" />
                  <span className="text-gray-400 hidden md:inline-flex">
                    Download CV
                  </span>
                </Link>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-row gap-6 md:gap-3 items-center justify-center md:flex-col md:gap-5 md:items-start">
                <div className="flex flex-row items-center gap-6 md:gap-3">
                  <Link href={`https://wa.me/${MOBILE_NUMBER}`} target="_blank">
                    <IconBrandWhatsapp className="w-7 h-7 md:w-9 md:h-9" />
                  </Link>
                  <Link href={`https://t.me/${MOBILE_NUMBER}`} target="_blank">
                    <IconBrandTelegram className="w-7 h-7 md:w-9 md:h-9" />
                  </Link>
                  <Link href={`tel:${MOBILE_NUMBER}`} target="_blank">
                    <IconPhone className="w-7 h-7 md:w-9 md:h-9" />
                  </Link>
                </div>
                <Link
                  href={GOOGLE_PROFILE}
                  className="inline-flex flex-row items-center gap-3"
                >
                  <IconMail className="w-7 h-7 md:w-9 md:h-9" />
                  <span className="text-gray-400 hidden md:inline-flex">
                    mito.jan.arvin@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 text-center">
            <h5>Want to stay connected?</h5>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 mx-auto text-center">
        Copyright &copy; 2024 amito.dev. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
