module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */ 
    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: false,
	css: {
	    loaderOptions: {
	      // 给 sass-loader 传递选项
	      sass: {
	        // @/ 是 src/ 的别名
	        // 所以这里假设你有 `src/variables.sass` 这个文件
	        // 注意：在 sass-loader v7 中，这个选项名是 "data"
	        prependData: `@import "~@/styles/main.sass"`
	      },
	      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
	      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
	      // 但是在配置 `data` 选项的时候
	      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
	      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
	      scss: {
	      },
	      // 给 less-loader 传递 Less.js 相关选项
	      less:{
	        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
	        // `primary` is global variables fields name
	        globalVars: {
	          primary: '#fff'
	        }
	      }
	    }
	  },
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8066,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://47.100.47.3/',
                /* 允许跨域 */
                changeOrigin: true,
            },
        },
    },
}