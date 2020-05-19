const fs = require('fs');
const path = require('path');
const markdownItAttrs = require('markdown-it-attrs');

const order = ['code', 'usage', 'demo', 'api', 'accessibility'];

// function getChildren(dir) {
//   return fs
//     .readdirSync(path.join(process.cwd(), dir))
//     .filter(file => file.includes('.md') && !file.includes('README'))
//     .map(file => `/${dir}/${file.replace('.md', '')}`);
// }

function camelCase(str) {
  const parts = str.split('-');
  return parts.map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');
}

function sortChildren(children) {
  return children.sort((a, b) => {
    const aIndex = order.findIndex(o => a.includes(o));
    const bIndex = order.findIndex(o => b.includes(o));
    return aIndex - bIndex;
  });
}

function getChildren(dir) {
  const base = path.join(process.cwd(), dir);
  const components = fs
    .readdirSync(base)
    .filter(basename => fs.statSync(path.join(base, basename)).isDirectory())
    .map(subdir => {
      return {
        title: camelCase(subdir),
        path: `/${dir}/${subdir}`,
        children: [`/${dir}/${subdir}/`, ...sortChildren(getChildren(`${dir}/${subdir}`))],
      };
    });
  return components;
}

module.exports = [
  {
    title: 'Get Started',
    path: '/get-started/',
    children: getChildren('get-started'),
  },
  {
    title: 'Foundation',
    path: '/foundation/',
    children: [
      {
        title: 'Color',
        path: '/foundation/color/',
      },
      {
        title: 'Icons',
        path: '/foundation/icons/',
        children: [
          '/foundation/icons/',
          '/foundation/icons/usage',
          '/foundation/icons/api',
          '/foundation/icons/accessibility',
        ],
      },
      '/foundation/internationalization/',
      '/foundation/themes/',
      '/foundation/typography/',
    ],
  },
  {
    title: 'Components',
    path: '/components/',
    children: getChildren('components'),
  },
  {
    title: 'Releases',
    path: '/releases/',
    children: ['/releases/v3'],
  },
];
