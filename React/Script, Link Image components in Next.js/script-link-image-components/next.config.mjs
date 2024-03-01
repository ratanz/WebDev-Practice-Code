/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.lifestyleasia.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
