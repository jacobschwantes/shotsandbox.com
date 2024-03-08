/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')
const withMDX = require('@next/mdx')({
   reactStrictMode: true,
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withPlausibleProxy(withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}))