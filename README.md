# NodeAsp #

`NodeAsp`是一套Classic ASP框架，借鉴了NodeJS的模块化思想，让您可以使用全新的理念愉快地书写ASP程序。

`NodeAsp`使用遵循CommonJS规范的require，完全兼容NodeJS模块加载方式，让您可以直接使用NodeJS 50%以上的模块。一切不关乎NodeJS运行环境和ES5-ES6特有对象的模块都能直接使用。如此庞大的模块资源库，这在以往任何ASP框架下都是没有的。

`NodeAsp`是ASP领域独树一帜的创新性框架，她的出现改变了传统的ASP编写模式，让您只需要会js就可以同时完成前后端开发，并免除了部署NodeJS服务器的繁琐过程。

`NodeAsp`作为ASP领域的终结者，来了。

## Homepage ##

NodeAsp：http://nodeasp.com

模块下载：http://nap.webkits.cn

## Environment ##

这个框架仅限在WIN平台IIS上运行。

## Usage ##

第一步：下载NodeAsp。

第二步：引用NodeAsp。

```html
<!--#include file="NodeAsp.min.asp" -->
```

第三步：使用NodeAsp。

```html
<%
    var version = process.version;
    Response.Write(version);
%>
```

## APIs ##

### process ###

输出与运行环境有关的一些信息。

### console ###

兼容NodeJS的命令行调试工具。下载地址：https://github.com/Spikef/NodeAsp-Console

> NOTE: 需要IIS7.5和.NET4才能运行，其它环境未测试。

#### 第一步：注册COM组件 ####

以管理员权限打开CMD，使用REGASM命令注册component\Terminal.dll，其中REGASM位于C:\Windows\Microsoft.NET\Framework\v4.0.30319(具体位置与版本号有关)。

```
C:\Windows\Microsoft.NET\Framework\v4.0.30319\REGASM D:\component\Terminal.dll /codebase
```

#### 第二步：修改注册表，解决 ASP 0177 : 8000ffff 错误 ####

对于32位系统，找到如下注册表位置：
> HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\MAIN\FeatureControl\FEATURE_IGNORE_ZONES_INITIALIZATION_FAILURE_KB945701

对于64位系统，找到如下注册表位置：
> HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\MAIN\FeatureControl\FEATURE_IGNORE_ZONES_INITIALIZATION_FAILURE_KB945701

选择或者新建项<code>FEATURE_IGNORE_ZONES_INITIALIZATION_FAILURE_KB945701</code>，然后新建DWORD值：

> 名称：w3wp.exe
> 值：1

#### 第三步：启动Console ####

双击Console.exe，打开NodeAsp调试命令行。

#### 第四步：调试 ####

**console.log()**

向Console输出，使用默认颜色。

```javascript
var a = {name: "NodeAsp", version: "0.0.1"};
console.log(a);
```

**console.info()**

向Console输出，使用绿色。

**console.error()**

向Console输出，使用红色。

**console.warn()**

向Console输出，使用黄色。

**console.time(label)**

使用label指定名称，开始一个计时器，用于计算操作所需要花费的时间。

**console.timeEnd(label)**

输出某项操作所需要消耗的时间。

Example:

```javascript
    console.time('100-elements');
    for (var i = 0; i < 100; i++) {
      ;
    }
    console.timeEnd('100-elements');
    // prints 100-elements: 262ms
```

## Commands

Console中可以输入以下命令。

* cls/clear：清空调试信息，不可恢复。

* about：显示关于信息。

* copylast：复制上一条输出信息。

* copyall：复制所有输出信息。

### require(expression) ###

require用于加载一个NodeAsp/NodeJS模块(包)，学会使用NodeASP最关键的一点就是理解require。

```javascript
// a.js
var a = {};
a.add = function(m, n) {return m+n};
module.exports = a;
// b.js
exports.minus = function(m, n) {return m-n};
exports.times = function(m, n) {return m*n};
// main.js
var a = require('./a');
var b = require('./b');
var result = a.add(b.times(2 * 3), 4);
console.log(result);
// 4
```

更多模块相关的内容请参考[NodeAsp文档 - 模块](http://nodeasp.com/api/#modules)。
## node_modules ##

与NodeJS一样，我们把模块放到node_modules目录下。模块可以使用[nap-cli](https://www.npmjs.com/package/nap-cli)命令行工具安装，这是一个运行在[NodeJS](http://nodejs.org)下的工具。

因为运行环境的关系，并非所有的NodeJS模块都可以直接运行于NodeAsp。下面简单介绍几个常用模块：

**fs**：文件操作模块。

**http**：HTTP请求与处理模块。

**database**：数据库处理模块。

更多模块请访问[NodeAsp模块](http://package.nodeasp.com)或者[NPM](http://npmjs.org)。
  
## License ##

MIT
