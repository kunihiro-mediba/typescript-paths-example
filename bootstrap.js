const TsconfigPaths = require('tsconfig-paths');
const tsconfig = require('./tsconfig.json');
TsconfigPaths.register({
    baseUrl: './dist/node',
    paths: tsconfig.compilerOptions.paths,
});
