const markdownItAttrs = require('markdown-it-attrs');
const sidebar = require('./sidebar');
const blocks = require('./blocks');
const path = require('path');

module.exports = {
  title: 'Clarity Design System',
  description: 'Clarity Design System is the premiere design system for application development.',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  dest: '../../dist/website',
  themeConfig: {
    // algolia: {
    //   apiKey: 'd3349af25a19e3824cb48e57fe88fdcb',
    //   indexName: 'clarity',
    // },
    lastUpdated: 'Last Updated',
    search: false, // Disabling for the moment
    sidebar,
  },
  markdown: {
    extendMarkdown: md => {
      // Disabling include plugin until I figure out if it casuse Vuepress to hang.
      // md.use(require('markdown-it-include'));
      md.use(markdownItAttrs);
    },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '§',
    },
  },
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js'],
  plugins: [
    'vuepress-plugin-table-of-contents',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://clarity.design',
        outFile: 'sitemap.xml',
      },
    ],
    ...blocks,
  ],
  configureWebpack: {
    resolve: {
      alias: {
        // Note: paths to dist/core/* are from website root, not .vuepress
        // TODO(matt): replace this with a link://../../dist/core/* path
        // First try and yarn was linking to a directory that doesn't even exist on my local
        '@clr/core': path.resolve('../../dist/core'),
        '@clr/core/alert': path.resolve('../../dist/core/alert'),
        '@clr/core/badge': path.resolve('../../dist/core/badge'),
        '@clr/core/button': path.resolve('../../dist/core/button'),
        '@clr/core/checkbox': path.resolve('../../dist/core/checkbox'),
        '@clr/core/datalist': path.resolve('../../dist/core/datalist'),
        '@clr/core/date': path.resolve('../../dist/core/date'),
        '@clr/core/file': path.resolve('../../dist/core/file'),
        '@clr/core/forms': path.resolve('../../dist/core/forms'),
        '@clr/core/icon': path.resolve('../../dist/core/icon'),
        '@clr/core/input': path.resolve('../../dist/core/input'),
        '@clr/core/modal': path.resolve('../../dist/core/modal'),
        '@clr/core/password': path.resolve('../../dist/core/password'),
        '@clr/core/radio': path.resolve('../../dist/core/radio'),
        '@clr/core/range': path.resolve('../../dist/core/range'),
        '@clr/core/search': path.resolve('../../dist/core/search'),
        '@clr/core/select': path.resolve('../../dist/core/select'),
        '@clr/core/tag': path.resolve('../../dist/core/tag'),
        '@clr/core/textarea': path.resolve('../../dist/core/textarea'),
        '@clr/core/time': path.resolve('../../dist/core/time'),
        '@clr/core/toggle': path.resolve('../../dist/core/toggle'),
        '@clr/icons': path.resolve('../../dist/clr-icons'),
        '@clr/icons/shapes/all-shapes': path.resolve('../../dist/clr-icons/shapes/all-shapes.min'),
      },
    },
  },
};
