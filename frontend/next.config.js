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
