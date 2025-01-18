/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignore linting errors during the build process
        ignoreDuringBuilds: true,
        rules: {
            // Disable specific ESLint rules
            '@next/next/no-img-element': 'off',
            'react/no-unescaped-entities': 'off',
        },
    },
    // Add any other Next.js settings here
};

module.exports = nextConfig;