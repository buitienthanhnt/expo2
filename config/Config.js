const Config = (path = "", params = null) => {
    const Config = {
        domain: "",
        http: "http://",
        https: "https://",
        ip: "192.168.1.153/",
        uri: "laravel1/public/index.php/",
        api_request: {
            testJson: "testJson"
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