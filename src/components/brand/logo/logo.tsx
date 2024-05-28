import Image from "next/image";
import AmitoLogo from "@/public/amito-brand.svg";

const Logo = () => {
  return <Image src={AmitoLogo} alt="Amito" height={48} />;
};

export default Logo;
