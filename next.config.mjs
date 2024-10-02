/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hyzpublic.s3.amazonaws.com','strapi-images-folder.s3.ap-southeast-2.amazonaws.com'], // 添加允许的图片域名
      },
};

export default nextConfig;
