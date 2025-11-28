import type {Config} from "@react-router/dev/config";
export default {
    ssr: true, // You want SSR
// @ts-ignore
    ignoredRouteFiles: [
        // Ignore everything in public
        "public/**",

        // Ignore assets
        "**/*.svg",
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.ico",

        // Ignore css
        "**/*.css",

        // Ignore markdown + docs
        "**/*.md",
        "**/*.mdx",

        // Ignore type files
        "**/*.d.ts",

        // Ignore test files
        "**/*.test.{ts,tsx,js,jsx}",

        // Ignore config files so they don’t become routes
        "vite.config.*",
        "tsconfig.*",
        "react-router.config.*",

        // Ignore EVERYTHING at project root
        "/*",
    ],
} satisfies Config;
