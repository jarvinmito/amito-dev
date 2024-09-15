import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import AnaglyphText from "./AnaglyphText";
import HackedText from "./HackedText";

interface SectionTitleProps {
  title: string;
  href?: string;
}

const SectionTitle = ({ title, href }: SectionTitleProps) => {
  return (
    <div className="grid grid-cols-12 xl:gap-8">
      <h2 className="col-span-12 sm:col-span-9 uppercase">
        <HackedText text={title} />
      </h2>
      {href ? (
        <Link
          href={href}
          className="col-span-12 sm:col-start-10 sm:col-span-3 flex flex-row items-center sm:justify-end gap-6 cursor-pointer font-light"
        >
          See full list{" "}
          <IconArrowNarrowRight style={{ height: 48, width: 48 }} />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionTitle;
