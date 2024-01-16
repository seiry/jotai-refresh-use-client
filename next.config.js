/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [
            // enable this will cause error
            ['@swc-jotai/react-refresh', {}],
        ],
    },
}

module.exports = nextConfig
