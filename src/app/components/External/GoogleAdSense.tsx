import Script from "next/script";

export type AdProps = {
  pId: string;
};

const GoogleAdSense: React.FC<AdProps> = ({ pId }) => {
  if (process.env.VERCEL_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdSense;
