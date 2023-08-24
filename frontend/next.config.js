/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/trains",
        destination: `${process.env.API_URL}/trains`,
      },
      {
        source: "/trains/status",
        destination: `${process.env.API_URL}/trains/status`,
      },
      {
        source: "/reports",
        destination: `${process.env.API_URL}/reports`,
      },
      {
        source: "/reports/status",
        destination: `${process.env.API_URL}/reports/status`,
      },
      {
        source: "/feedbacks",
        destination: `${process.env.API_URL}/feedbacks`,
      },
    ];
  },
};

module.exports = nextConfig;
