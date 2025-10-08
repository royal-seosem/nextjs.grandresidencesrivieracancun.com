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
            // ➊  SVG como React Component SIN optimizar ── *.svg?svgo=false
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: /svgo=false/,          // <-- detecta la query
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            dimensions: false,
                            svgo: false,
                            removeScriptElement: false,
                        },
                    },
                ],
            },
            // ➋  SVG cargado como URL ── *.svg?url           (ya lo tenías)
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            // ➌  Resto de SVG como React Component CON SVGO  (por defecto)
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/, /svgo=false/] },
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            dimensions: false,
                            svgo: true,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: 'preset-default',
                                        params: {
                                            overrides: {
                                                removeViewBox: false
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
            {
                protocol: 'https',
                hostname: 'grandresidencesrivieracancun.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.royalresorts.com',
                pathname: '/**',
            },

        ],
    },
    experimental: {
        viewTransition: true,
    },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
