// https://cli.vuejs.org/zh/config/#lintonsave
module.exports = {
  publicPath: '/',
  outputDir: 'video',
  assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。 
  lintOnSave: true, // boolean | 'warning' | 'default' | 'error'
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  productionSourceMap: false,  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  integrity: false, // 
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts"]
    }
  }, // Type: Object | Function
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  // https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  chainWebpack: () => {}, // Type: Function
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    // 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true, // Default: true
    /**
     * 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
       同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
       当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
       提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
      */
    extract: process.env.NODE_ENV === 'production' ? true : false, // Default: 生产环境下是 true，开发环境下是 false
    sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    /**
     * 支持的 loader 有：
        css-loader
        postcss-loader
        sass-loader
        less-loader
        stylus-loader
     */
    loaderOptions: {
      // less: {
      //   lessOptions: {
      //     modifyVars: {
      //       'primary-color': '#00bc9c',
      //       // 'link-color': '#1DA57A',
      //       'border-radius-base': '4px',
      //     },
      //     javascriptEnabled: true,
      //   },
      // },
      // 传的是变量
    }, //  CSS 相关的 loader 传递选项。例如：
  },
  // 所有 webpack-dev-server 的选项
  // 有些值像 host、port 和 https 可能会被命令行参数覆写。
  // 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作
  devServer: {
    hot: true,
    proxy: '', // Type: string | Object
  },
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {}, // 向 PWA 插件传递选项
}