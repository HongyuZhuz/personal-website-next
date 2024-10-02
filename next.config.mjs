/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hyzpublic.s3.amazonaws.com'], // 添加允许的图片域名
        domains: ['strapi-images-folder.s3.ap-southeast-2.amazonaws.com'],
      },
};

export default nextConfig;
