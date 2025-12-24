/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration for Next.js 15
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
