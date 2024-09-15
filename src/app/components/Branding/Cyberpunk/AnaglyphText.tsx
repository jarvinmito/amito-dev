import { AllHTMLAttributes } from "react";

const AnaglyphText = ({ children }: AllHTMLAttributes<HTMLBaseElement>) => (
  <span className="relative">{children}</span>
);

export default AnaglyphText;
