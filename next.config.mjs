// import withMDX from "@next/mdx";

// const mdxConfig = {
//   extension: /\.mdx?$/,
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig; //withMDX(mdxConfig)(nextConfig);
