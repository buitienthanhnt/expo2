const Config = (path = "", params = null) => {
    const Config = {
        domain: "",
        http: "http://",
        https: "https://",
        ip: "192.168.1.153/",                 // 192.168.1.153(m4700-mochi)
        uri: "laravel1/public/index.php/",    // laravel1/public/index.php(m4700-mochi)
        // ip: "192.168.100.210/",            // 192.168.100.210(jm-destop)
        // uri: "newpaper/public/index.php/", // newpaper/public/index.php(jm-destop)
        api_request: {
            getpapers:        "api/getpapers/",
            getPaperDetail:   "api/getpaperdetail/",
            getCategoryTop:   "api/getcategorytop/",
            getPaperCategory: "api/papercategory/"
        },
        buy_params: function (params) {
            var values = "?";
            for (const key in params) {
                values += key + "=" + params[key] + "&";
            }
            return values.slice(0, values.lastIndexOf("&")); // loại bỏ dấu:: "&" ở vị trí cuối cùng.
        }
    };

    let url = "";

    if (Config.domain) {
        url = Config.domain;
    } else {
        url = Config.http + Config.ip + Config.uri;
    }
    Config["url"] = url;
    return Config;
};



export default Config();

// https://github.com/ant-design/ant-design-mobile-rn
// http://rn.mobile.ant.design/docs/react/introduce