// 判断是测试环境还是线上环境，
// let locationHref = window.location.href;
// let isContain = locationHref.indexOf("https://m.9kacha.com/channel_test");
/**
 * [description]
 * @Author   jok
 * @DateTime 2017-11-06T11:40:41+0800
 * @return   {[type]} url为线上线下，打包和生成环境的情况判断
 */

const  environment = () => {
    var node_env = process.env.NODE_ENV;
    // 线上api
    if (node_env == 'development') {
        // 生产开发环境api
        var url = 'http://10.172.0.200:7080/gdmcmc-app';
    } else if (node_env == 'production') {
        // 测试线下环境api，包含channel_test
        var url = "http://10.172.0.200:7080/gdmcmc-app";
    }
    return url;
}

const url = environment()

export default url
