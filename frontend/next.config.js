/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/trens",
        destination: `${process.env.API_URL}/trens`,
      },
      {
        source: "/trens/status",
        destination: `${process.env.API_URL}/trens/status`,
      },
    ];
  },
};

module.exports = nextConfig;
