/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
    images: {
        domains: ['hyzpublic.s3.amazonaws.com','strapi-images-folder.s3.ap-southeast-2.amazonaws.com','s3.ap-southeast-2.amazonaws.com'], // 添加允许的图片域名
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
      },
};

export default nextConfig;
