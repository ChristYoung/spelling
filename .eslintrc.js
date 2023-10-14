// https://juejin.cn/post/7226345144995758135
module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
        sourceType: 'module', // 表示校验整个项目是以esm模块的语法来进行校验的
    },
    env: {
        browser: true, // 启用浏览器环境
        es2021: true, // 使用 ES2021 版本的特性
        commonjs: true, // 表示支持commonjs模块下的环境变量, 如果将这行去掉, 这个.eslint.js文件就会报错
    },
    parser: '@typescript-eslint/parser', // 使用 '@typescript-eslint/parser' 作为解析器，用于解析 TypeScript 代码
    extends: [
        'eslint:recommended', // 使用 ESLint 推荐的基本规则
        // 'plugin:react/recommended', // 使用 react 插件推荐的规则
        'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 插件推荐的规则
        'plugin:prettier/recommended',
    ],
    plugins: [ 'react' ], // 启用 react 插件
    rules: {
        // 想在运行eslint时同时运行prettier，并且把prettier的错误作为eslint的错误来显示
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto', // 不让prettier检测文件每行结束的格式
            },
        ],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        'max-len': [ 'error', { code: 180 } ],
        '@typescript-eslint/no-empty-function': [ 'off' ], // 0表示不校验
        'jsx-quotes': [ 'error', 'prefer-double' ], // 在jsx的html元素中优先使用双引号
    },
};
