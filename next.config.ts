import type {NextConfig} from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule: { test: { test: (arg0: string) => unknown; }; }) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]}, // exclude if *.svg?url
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            // No añadir width/height automáticos
                            dimensions: false,
                            // Mantener el viewBox y eliminar dimensiones vía SVGO
                            svgo: true,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: 'preset-default',
                                        params: {
                                            overrides: {
                                                removeViewBox: false,   // conserva viewBox
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
    },
    images: {
        remotePatterns: [
            new URL('https://grandresidencesrivieracancun.com/**'),
            new URL('https://www.royalresorts.com/**')
        ],
    },
    experimental: {
        viewTransition: true,
    },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
