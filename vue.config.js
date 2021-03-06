// const path = require('path');
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// // 项目的主要配置文件
// module.exports = {
//   // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
//   chainWebpack: (config)=>{
//     //修改文件引入自定义路径
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('components', resolve('src/components'))
//       .set('views', resolve('src/views'))
//       .set('common', resolve('src/common'))
//       .set('network', resolve('src/network'))
//   }
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src' : '@',
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network'
      }
    }
  }
}
