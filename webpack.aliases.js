const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we using in here for aliases in project.
 */
module.exports = createWebpackAliases({
    '@apps': 'apps',
    '@assets': 'assets',
    '@src': 'src',
    '@/utils': 'src/utils',
    '@/components': 'src/components',
    '@pages': 'src/pages',
    '@hooks': 'src/hooks',
});
