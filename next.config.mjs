/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tuboliteros.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
