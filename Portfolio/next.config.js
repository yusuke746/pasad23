/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: [
        '@react-email/render',
    ],
    experimental:{
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
    }
}

module.exports = nextConfig
