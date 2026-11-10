/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  experimental: { optimizePackageImports: ['gsap', '@react-three/drei'] },
};
export default config;
