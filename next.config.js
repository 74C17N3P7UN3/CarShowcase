/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.imagin.studio",
            pathname: "/get-image",
         }
      ]
   }
}

module.exports = nextConfig
