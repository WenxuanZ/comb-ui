let config = {
    DEBUG: true,
    TITLE: '动因体育',
    APPID: 505,
    model: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) ? 'ios' : 'android',
    // 测试code，上线后注释掉！
    token: '', // token
    URL: '',    // 本地服务的api地址
    Html2canvasImg: '',
    SIGNIN_URL: '',    // 登陆、微信OAuth地址
    MATCH_URL: '',    // 赛事API地址
    LIMIT: 10,  // 列表时，每次请求的记录数

    history: {},    // 保存页面滚动条的位置信息

    loginData: { // 用户登录信息，在api.login方法中赋值
        userInfo: { userId: 0 }
    },
    BMAP_URL: '',     // 百度地图接口
    BMAP_AK: 'fxgnhRQk7PhTxbS65PQl85QQTIYjuZro',     // 百度地图接口ak
    AMAP_KEY: '5249ccefcdf2da0475ac21cb30105601',    // 高德key
    AMAP_VERSION: '1.4.1', // 高德API版本
    AIDONGJI_URL: '',
};
// if (process.env.NODE_ENV === 'production') { // 如果是线上环境，修改对应的参数. mod by Dio Zhu. on 2017.6.22
//     let url = window.location.href;
//     if (/^https?:\/\/pre\.doing\.hy-sport\.cn\//ig.test(url)) { // 预发环境
//         // config.URL = 'http://pre.doing.hy-sport.cn';
//         config.URL = '//api-dongyin.hy-sport.cn';
//         // config.MATCH_URL = 'http://47.95.47.51:8081';
//         config.MATCH_URL = '//qa-s-match.hy-sport.cn:9082';
//         config.AIDONGJI_URL = '//aidongji.hy-sport.cn';
//     } else if (/^https?:\/\/dongyin\.hy-sport\.cn\//ig.test(url)) { // 上线环境，公网解析
//         config.URL = '//api-dongyin.hy-sport.cn';
//         config.MATCH_URL = 'http://47.95.43.139:9081';
//         // config.MATCH_URL = '//api-match.hy-sport.cn:9082';
//         config.AIDONGJI_URL = '//aidongji.hy-sport.cn';
//     } else if (/^https?:\/\/q1-f-doing\.hy-sport\.cn\//ig.test(url)) { // 测试环境二，公网解析
//         config.URL = '//q1-s-doing.hy-sport.cn/';
//         config.MATCH_URL = '//q1-s-match.hy-sport.cn:8081';
//         config.AIDONGJI_URL = '//aidongji.hy-sport.cn';
//     } else { // 开发环境
//         config.URL = '//qa.doing.hy-sport.cn';
//         // config.MATCH_URL = '//47.95.47.51:8081';
//         config.MATCH_URL = '//qa-s-match.hy-sport.cn:9082';
//         config.AIDONGJI_URL = '//aidongji.hy-sport.cn';
//     }
//     config.SIGNIN_URL = '//qa.education.hy-sport.cn'; // 开发环境
//     // config.COMMENT_UTL = 'http://172.28.50.173:8080';
//     config.BMAP_URL = 'http://api.map.baidu.com';
//     // config.MATCH_URL = 'http://47.95.47.51:8081';
// }
// // if (process.env.NODE_ENV === 'production') { // 如果是线上环境，修改对应的参数. mod by Dio Zhu. on 2017.6.22
// //     config.URL = '';
// // }
// // window.location.host.indexOf('localhost') !== -1 || window.location.host.indexOf('doing') !== -1 ? 'http://qa.doing.hy-sport.cn' : 'http://api-dongyin.hy-sport.cn',

export default config;
