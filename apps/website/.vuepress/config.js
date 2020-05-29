const markdownItAttrs = require('markdown-it-attrs');
const sidebar = require('./sidebar');

module.exports = {
  title: 'Clarity Design System',
  description: 'Clarity Design System is the premiere design system for application development.',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  dest: '../../dist/website',
  themeConfig: {
    algolia: {
      apiKey: 'd3349af25a19e3824cb48e57fe88fdcb',
      indexName: 'clarity',
    },
    lastUpdated: 'Last Updated',
    search: true,
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
      // permalinkSymbol: '🔗',
    },
  },
  extraWatchFiles: ['.vuepress/sidebar.js'],
  plugins: [
    'vuepress-plugin-table-of-contents',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    // SUMMARY BLOCK
    [
      'vuepress-plugin-container',
      {
        type: 'summary',
        render: function (tokens, idx) {
          const item = tokens[idx];
          if (item.type === 'container_summary_open') {
            return `<ClrSummary>`;
          } else if (item.type === 'inline') {
            return item.content;
          } else if (item.type === 'container_summary_close') {
            return `</ClrSummary>`;
          }
        },
      },
    ],
  ],
};
