/*获取应用系统类型*/
export function getSystem () {
  var plat = getPlatFrom();
  if(plat == 'iphone' || plat == 'ipod' || plat == 'ipad'){
      return 'ios';
  }else if(plat == 'android'){
      return 'android';
  }else{
      return 'unknown';
  }
}

function getPlatFrom() {
      var a = window.navigator.userAgent.toLowerCase();
      var b = a.match(/(iphone|ipod|ipad|android|windows phone|blackberry|symbian|Windows Phone)/);
      if (!!b) {
          b = b.toString();
      }
      if (b) {
          if (b.indexOf("iphone") >= 0) {
              return "iphone"
          }else if (b.indexOf("ipod") >= 0){
              return "ipod"
          }else if (b.indexOf("ipad") >= 0) {
              return "ipad"
          }else if (b.indexOf("android") >= 0) {
              return "android"
          }else if (b.indexOf("windows phone") >= 0) {
              return "wp7"
          }else if(b.indexOf("symbian")>=0){
              return "symbian"
          }else if (b.indexOf("blackberry") >= 0) {
              return "blackberry"
          }else if(b.indexOf("Windows Phone")>=0){
              return "wp7"
          }
          else {
              return "unknow"
          }
      }
      return "unknow"
}