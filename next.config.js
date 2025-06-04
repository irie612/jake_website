/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
    	deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    	imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	reactStrictMode: true,
	trailingSlash: true,
};

module.exports = nextConfig;
