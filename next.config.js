/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.geojson$/,
            use: ["json-loader"]
        });      
        return config
    },
}

module.exports = nextConfig
