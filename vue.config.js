// const BASE_URL = process.env.NODE_ENV === 'production' ? '/shengchan' : '/' //食品网生产
module.exports = {
    // 设置生产环境是否加载webpack文件
    // publicPath: BASE_URL
    productionSourceMap: false,

    lintOnSave: false,
    configureWebpack:{
        plugins:[
            
        ]
    }
}
