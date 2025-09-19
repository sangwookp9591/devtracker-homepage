import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['http://localhost:3000', 'https://www.devtracker.co.kr', 'https://devtracker.co.kr'],
  },
};

export default withVanillaExtract(nextConfig);
