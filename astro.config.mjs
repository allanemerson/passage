// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://passage.emerson-allan.workers.dev',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    loadPaths: ['src/styles'],
                    additionalData: `@use "utils" as utils;`,
                },
            },
        },
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "JosefinSansRegular",
            cssVariable: "--ff-josefin-sans--regular",
            options: {
                variants: [{
                    src: ['./src/assets/fonts/JosefinSans-Regular.ttf'],
                    weight: 'normal',
                    style: 'normal'
                }]
            }
        },
        {
            provider: fontProviders.local(),
            name: "JosefinSansItalic",
            cssVariable: "--ff-josefin-sans--italic",
            options: {
                variants: [{
                    src: ['./src/assets/fonts/JosefinSans-Italic.ttf'],
                    weight: 'normal',
                    style: 'normal'
                }]
            }
        },
        {
            provider: fontProviders.local(),
            name: "JosefinSansBold",
            cssVariable: "--ff-josefin-sans--bold",
            options: {
                variants: [{
                    src: ['./src/assets/fonts/JosefinSans-Bold.ttf'],
                    weight: 'normal',
                    style: 'normal'
                }]
            }
        },
        {
            provider: fontProviders.local(),
            name: "Manchester",
            cssVariable: "--ff-manchester--regular",
            options: {
                variants: [{
                    src: ['./src/assets/fonts/ManchesterSignature.ttf'],
                    weight: 'normal',
                    style: 'normal'
                }]
            }
        },
    ]
});
