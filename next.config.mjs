/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/abteilungssprecher", // The deprecated page URL
        destination: "/journeys/representative", // The new page URL to redirect to
        permanent: true, // Use true for permanent redirects (308)
      },
    ];
  },
};

export default nextConfig;
