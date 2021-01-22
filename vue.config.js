const path = require('path')

const glob = require('glob')

// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 代码压缩
const TerserPlugin = require('terser-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  outputDir: `dist-${process.env.VUE_APP_CURENV}`,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))

    // 修复HMR
    config.resolve.symlinks(true)

    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // ============压缩图片 start============
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
    // ============压缩图片 end============

    // 生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      // gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugin('CompressionWebpackPlugin')
        .use(new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        }))

      config.plugin('TerserPlugin')
        .use(new TerserPlugin({
          terserOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        }))

      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after(`html`)
        .use('script-ext-html-webpack-plugin', [{
          inline: /runtime\..*\.js$/
        }])
        .end()

      config
        .optimization.splitChunks({
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // only package third parties that are initially dependent
            },
            vant: {
              name: 'chunk-vant', // split vant into a single package
              priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
              test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'), // can customize your rules
              minChunks: 3, //  minimum common number
              priority: 5,
              reuseExistingChunk: true
            }
          }
        })

      config.optimization.runtimeChunk('single')

      config.plugin('preload').tap(() => [{
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }])
      
      config.plugins.delete('prefetch')
    })
  },
  configureWebpack: {
    
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
  // 这里写你调用接口的基础路径，来解决跨域
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less') // 需要全局导入的less
      ]
    })
}
