import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";


const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  /* config options here */
};


export default withFlowbiteReact(nextConfig);