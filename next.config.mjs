import mdx from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import * as fs from "fs";

/** @type {import('rehype-pretty-code').Options} */
const options = {
    theme: JSON.parse(
        fs.readFileSync('./public/moonlight-ii.json', 'utf-8')
    ),
    keepBackground: true,
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty
        // lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className.push('line--highlighted');
    },
    onVisitHighlightedWord(node, id) {
        node.properties.className = ['word'];

        if (id) {
            const backgroundColor = {
                v: 'rgb(196 42 94 / 59%)',
                s: 'rgb(0 103 163 / 56%)',
                i: 'rgb(100 50 255 / 35%)',
            }[id];

            const color = {
                v: 'rgb(255 225 225 / 100%)',
                s: 'rgb(175 255 255 / 100%)',
                i: 'rgb(225 200 255 / 100%)',
            }[id];

            if (node.properties['data-rehype-pretty-code-wrapper']) {
                node.children.forEach((childNode) => {
                    childNode.properties.style = '';
                });
            }

            node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
        }
    },
};

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [[rehypePrettyCode, options]],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}

// Merge MDX config with Next.js config
export default withMDX({
    ...nextConfig,
    experimental: { esmExternals: true }
})