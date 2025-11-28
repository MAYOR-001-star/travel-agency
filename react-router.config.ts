import type {Config} from "@react-router/dev/config";


export default {
    // Enable server-side rendering (default)
    ssr: true,

    // Prevent React Router from treating assets + config files as routes
    // @ts-ignore
    ignoredRouteFiles: [
        "**/*.css",
        "**/*.svg",
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.ico",
        "**/*.d.ts",
        "**/*.md",
        "**/*.test.{ts,tsx,js,jsx}",

        // Ignore the public folder completely
        "public/**",

        // Ignore Vite, TS, and config files
        "vite.config.*",
        "tsconfig.*",
        "react-router.config.*",
    ],
} satisfies Config;
