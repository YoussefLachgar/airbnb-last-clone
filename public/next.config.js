/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dctahvizk",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoibHkteW91c3NlZiIsImEiOiJjbG1xZTB2ZWwwMm5mMnFxeG9vM21wOXE0In0.mq8pk7tOrwxeLENp9QoT-A",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
