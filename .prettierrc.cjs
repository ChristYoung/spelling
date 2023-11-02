module.exports = {
    // 是否在语句末尾添加分号
    semi: true,
    // 是否使用单引号而不是双引号
    singleQuote: true,
    // 缩进的空格数
    tabWidth: 4,
    // 每行的最大字符数
    printWidth: 80,
    // 是否在多行元素的最后一行放一个括号
    bracketSameLine: true,
    // 箭头函数的参数只有一个参数的时候可以忽略括号
    arrowParens: 'avoid',
    // 在jsx的html元素中优先使用双引号
    jsxSingleQuote: false,
    // 在对象字面量中是否添加空格，例如 { foo: bar }
    bracketSpacing: true,
    // 每个html元素的属性都换行展示
    singleAttributePerLine: true,
    // 使用第三方插件对import语句按字母顺序排序
    importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports"]
};
