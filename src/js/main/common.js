//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
// 版本号，进行缓存管理
var VERSION = '0.1.0';
requirejs.config({
    urlArgs: "v=" + VERSION,
    baseUrl: './js/lib',
    paths: {
        app: '../app',
        template: '../../template',
        jquery: './jquery-1.9.1.min',
        validate: './jquery.validate',
        bootstrap:'./bootstrap.min',
        messagesZh: './messages_zh',
        laydate: './laydate/laydate'
    },
    shim: {
        jquery: {
            "exports": "$"
        },
        bootstrap: {
            "deps": ["jquery"]
        },
        validate: {
            "deps": ["jquery"]
        },
        messagesZh: {
            "deps": ["validate"]
        }
    }
});

var reqArr = ["text!template/public.html", "jquery", "bootstrap", "handlebars", "app/model/commonData"];
if (typeof(MainJS) != 'undefined') {
    reqArr.push(MainJS);
}

//公共模版渲染
define(reqArr, function(public, $,bootstrap, Handlebars, data) {
    $('#header').html(public);
    $('#header').html(Handlebars.compile($("#header-template").html())(data));
});