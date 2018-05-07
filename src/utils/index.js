// 获取链接字段
export function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/*获取万城万充客户端浏览器版本号*/
export function getVersion() {
    var ua = window.navigator.userAgent.toLowerCase();
    var pattern = /mcmcbrowser\/(\d.\d)/;
    var result = pattern.exec(ua);

    if (result != null) {
        var version = parseFloat(result[1]);
        return version;
    };
    return -1;
}

