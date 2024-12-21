import type { NextConfig } from "next";
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey);

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
