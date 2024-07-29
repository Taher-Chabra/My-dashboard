/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'external-preview.redd.it',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'entrepreneurhandbook.co.uk',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'cdn.roadtrips.com',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'img.freepik.com',
         pathname: '/**',
       },
     ],
   },
};

export default nextConfig;
