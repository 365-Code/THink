import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
    ]
},
}

// module.exports = nextConfig


  const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })
   
  // Merge MDX config with Next.js config
export default withMDX(nextConfig)