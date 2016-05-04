<!--#include file="../nodeAsp.min.asp" -->
<%
(function(){
    var mod = Request.QueryString("mod")();

    if (mod) {
        require('./' + mod);
    } else {
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>模块测试</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <style type="text/css">
        .label {
            display: inline-block;
            padding: .2em .6em .3em;
            margin-right: 0.7em;
            margin-bottom: 0.5em;
            font-size: 175%;
            font-weight: 400;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: .25em;
        }
    </style>
</head>
<body>
    <div class="well">
        <div class="container">
            <h3>选择要测试的模块</h3>
        </div>
    </div>

    <div class="container">
<%
        var modules = [], pages = [];

        var fso = new ActiveXObject('Scripting.FileSystemObject');
        var folder = fso.GetFolder(Server.MapPath('./'));
        var files = new Enumerator(folder.Files);
        for (; !files.atEnd(); files.moveNext()) {
            var name = files.item().Name;
            if ( /\.js$/i.test(name) ) {
                modules.push(name.replace(/\.js$/i, ''));
            }
            if ( /\.html$/i.test(name) ) {
                pages.push(name.replace(/\.html$/i, ''));
            }
        }
        modules.forEach(function(name) {
            if ( pages.indexOf(name) === -1 ) {
%>
            <a class="label label-primary" href="./?mod=<%=name%>"><%=name%></a>
<%
            }
        });
        pages.forEach(function(name) {
%>
            <a class="label label-success" href="./<%=name%>.html"><%=name%></a>
<%
        });
%>
    </div>
</body>
</html>
<%
    }
})();
%>