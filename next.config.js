/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath:
		process.env.NODE_ENV === "production" ? "/jake_website" : undefined,
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
