# NodeAsp #

`NodeAsp`是一套Classic ASP框架，借鉴了NodeJS的模块化思想，让您可以使用全新的理念愉快地书写ASP程序。

`NodeAsp`使用遵循CommonJS规范的require，完全兼容NodeJS模块加载方式，让您可以直接使用NodeJS 50%以上的模块。一切不关乎NodeJS运行环境和ES5-ES6特有对象的模块都能直接使用。如此庞大的模块资源库，这在以往任何ASP框架下都是没有的。

`NodeAsp`是ASP领域独树一帜的创新性框架，她的出现改变了传统的ASP编写模式，让您只需要会js就可以同时完成前后端开发，并免除了部署NodeJS服务器的繁琐过程。

`NodeAsp`作为ASP领域的终结者，来了。

## 主页 ##

NodeAsp：http://nodeasp.com

模块下载：http://nap.webkits.cn

## 运行环境 ##

这个框架仅限在WIN平台IIS上运行。通常普通的ASP虚拟主机即可运行本框架。

## 简单示例 ##

default.asp

```asp
<!--#include file="NodeAsp.asp" -->

<%
    require('./index.js');
%>
```

index.js

```javascript
var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
```

## 使用方法 ##

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

## 全局对象 ##

这些对象在所有模块中都是可用的。有些对象实际上并非在全局作用域内，而仅仅是在模块作用域内——这种情况在以下文档中会特别指出。

### global ###

在浏览器中，顶级作用域就是全局作用域。这就是说，在浏览器中，如果当前是在全局作用域内，var something将会声明一个全局变量。在NodeAsp中则不同。顶级作用域并非全局作用域，在NodeAsp模块里的var something只属于那个模块。

### process ###

输出与运行环境有关的一些信息。

在NodeAsp中，process存在的主要目的是为了兼容某些NodeJS模块，通常不会使用得到。

### console ###

用于打印标准输出和标准错误。

详见下面的`控制台`章节。

### Buffer ###

我们引入了buffer模块来兼容NodeJS的Buffer，请注意必须在node_modules下包含buffer模块才能使用Buffer。

如果您忘记在node_modules下放入buffer模块，这并不会影响程序的正常运行，只有当您使用Buffer时，才会抛出错误。

### require ###

引入模块。与NodeJS有点不一样的是，因为IIS只能直接执行ASP文件而非JS文件，所以require也可以用于在ASP代码中require一个模块。类似于在命令行中执行node test.js。

如果想知道调用require()方法加载模块时的真实文件路径，可以使用require.resolve()方法来得到。

详见下面的`模块`章节。

### __filename ###

当前所执行代码文件的文件路径。这是该代码文件经过解析后的绝对路径。

例如：执行 C:\websites\nodeasp\index.asp

```javascript
// module.js
Response.Write(__filename);
// C:\websites\nodeasp\module.js

// index.asp
require('./module');
Response.Write(__filename);
// C:\websites\nodeasp\index.asp
```

### __dirname ###

当前执行脚本所在目录的目录名。

### module ###

当前模块的引用。特别地，module.exports和exports指向同一个对象。module实际上并非全局的而是各个模块本地的。

详见下面的`模块`章节。

### exports ###

module.exports对象的引用，该对象被当前模块的所有实例所共享，通过require()可访问该对象。 何时使用exports以及何时使用module.exports的详情可参见模块系统文档。 exports实际上并非全局的而是各个模块本地的。

详见下面的`模块`章节。

### 定时器 ###

定时器函数一共包括以下四个。由于ASP是单线程的，所以以下函数实际上是不兼容的。

    setTimeout(cb, ms)

    clearTimeout(t)

    setInterval(cb, ms)

    clearInterval(t)

## 控制台 ##

为了更好的调试ASP程序，我们实现了类似NodeJS/Chrome浏览器的命令行调试工具。下载地址：http://download.nodeasp.com

> NOTE: 需要IIS7.5和.NET4才能运行，其它环境未测试。

### 使用指南 ###

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

在default.asp中输入以下代码，然后通过浏览器访问default.asp。接下来，你就可以在`Console.exe`中看到结果了。

```javascript
var a = {name: "nodeasp", value: true}
// 在console中将输出
//{
//    name: "nodeasp",
//    value: true
//}
```

### 模块方法 ###

#### console.log() ####

向Console输出，使用默认颜色。

```javascript
var a = {name: "NodeAsp", version: "0.0.1"};
console.log(a);
```

#### console.info() ####

向Console输出，使用绿色。

#### console.error() ####

向Console输出，使用红色。特别地，如果输出的是Error对象，将显示完整的错误信息。

#### console.warn() ####

向Console输出，使用黄色。

#### console.time(label) ####

使用label指定名称，开始一个计时器，用于计算操作所需要花费的时间。

#### console.timeEnd(label) ####

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

### 命令 ###

在控制台中可以输入以下命令。

* cls/clear：清空调试信息，不可恢复。

* about：显示关于信息。

* copylast：复制上一条输出信息。

* copyall：复制所有输出信息。

## 模块 ##

NodeAsp有一个跟NodeJS几乎一致的模块加载系统，这样可以保证NodeAsp可以直接使用大量NodeJS的模块。

NodeAsp的核心几乎不包含任何开发网站需要功能，所有功能都是通过模块来扩展的。可以通过NodeAsp的[模块中心](http://nap.webkits.cn/")或者[NPM](http://npmjs.org)来寻找您所需要的功能模块。

在NodeAsp中，文件和模块是一一对应的。下面是示例foo.js加载同一目录下的circle.js。

foo.js的内容

```javascript
var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is '
+ circle.area(4));
```

circle.js的内容:

```javascript
var PI = Math.PI;
exports.area = function (r) {
    return PI * r * r;
};
exports.circumference = function (r) {
    return 2 * PI * r;
};
```

circle.js模块输出了area()和circumference()两个函数。要输出某个对象，把它加到exports这个特殊对象下即可。

注意，exports是module.exports的一个引用，只是为了用起来方便。当你想输出的是例如构造函数这样的单个项目，那么需要使用module.exports。

```javascript
// 正确输出构造函数
module.exports = MyConstructor;
```

模块内的本地变量是私有的。在这个例子中，PI这个变量就是circle.js私有的。

### 循环 ###

考虑这样一种情形:

a.js

```javascript
console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
```

b.js

```javascript
console.log('b starting');
exports.done = false;
var a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
```

main.js

```javascript
console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);
```

首先main.js加载a.js,接着a.js又去加载b.js。这时，b.js会尝试去加载a.js。为了防止无限的循环，a.js会返回一个unfinished copy给b.js。然后b.js就会停止加载，并将其exports对象返回给a.js模块。

这样main.js就把这两个模块都加载完成了。这段程序的输出如下：

```javascript
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done=true, b.done=true
```

跟NodeJS一样，通常循环依赖模块并不会导致死循环，但是如果此时直接在模块加载时执行其它模块的方法，会提示找不到对应的方法，所以应该避开这种情况。

```javascript
// a.js
var b = require('./b.js');
    exports.add = function(m, n) {
    console.info(m + n);
};

// b.js
var a = require('./a');
var m = 101, n = 102;
exports.result = function() {
    a.add(m, n);        // 此处没有问题
};
a.add(m, n);            // 此处会报错，找不到a.add方法
```

### 文件模块 ###

如果按文件名没有查找到，那么NodeAsp会添加` .js`和` .json`后缀名，再尝试加载。

` .js`会被解析为Javascript纯文本文件，` .json`会被解析为JSON格式的纯文本文件。

模块以'/'为前缀，则表示绝对路径。例如，require('/home/marco/foo.js') ，加载的是/home/marco/foo.js这个文件。

模块以'./'为前缀，则路径是相对于调用require()的文件。 也就是说，circle.js必须和foo.js在同一目录下，require('./circle')才能找到。

当没有以'/'或者'./'来指向一个文件时，这个模块是从node_modules文件夹加载的。

如果指定的路径不存在，require()会抛出一个错误。

> NOTE: 考虑到IIS主机上，` .js`文件可以直接通过浏览器访问，所以如果不希望泄露源码，您也可以使用任意文件后缀名。

### 从node_modules文件夹中加载 ###

如果require()中的模块名不是一个本地模块，也没有以'/', '../', 或是 './'开头，那么node会从当前模块的父目录开始，尝试在它的/node_modules文件夹里加载相应模块。

如果没有找到，那么就再向上移动到父目录，直到到达顶层目录位置。

例如，如果位于'/home/ry/projects/foo.js'的文件调用了require('bar.js')，那么node查找的位置依次为：

* /home/ry/projects/node_modules/bar.js

* /home/ry/node_modules/bar.js

* /home/node_modules/bar.js

* /node_modules/bar.js

### 模块包 ###

可以把程序和库放到一个单独的文件夹里，并提供单一入口来指向它。有三种方法，使一个文件夹可以作为require()的参数来加载。

首先是在文件夹的根目录创建一个叫做package.json的文件，它需要指定一个main模块。下面是一个package.json文件的示例。

```javascript
{
    "name" : "some-library",
    "main" : "./lib/some-library.js"
}
```

示例中这个文件，如果是放在./some-library目录下面，那么require('./some-library')就将会去加载./some-library/lib/some-library.js。

如果目录里没有package.json这个文件，那么node就会尝试去加载这个路径下的index.js。

### 缓存 ###

模块在第一次加载后会被缓存。这意味着（类似其他缓存）每次调用require('foo')的时候都会返回同一个对象，当然，必须是每次都解析到同一个文件。

多次调用 require(foo) 未必会导致模块中的代码执行多次. 这是一个重要的功能. 借助这个功能, 可以返回部分完成的对象; 这样, 传递依赖也能被加载, 即使它们可能导致循环依赖。

如果你希望一个模块多次执行，那么就输出一个函数，然后调用这个函数。

模块的缓存是依赖于解析后的文件名。由于随着调用的位置不同，可能解析到不同的文件（比如需从node_modules文件夹加载的情况），所以，如果解析到其他文件时，就不能保证require('foo')总是会返回确切的同一对象。

### 模块对象 ###

在每一个模块中，变量 module 是一个代表当前模块的对象的引用。 特别地，module.exports 可以通过全局模块对象 exports 获取到。 module 不是事实上的全局对象，而更像是每个模块内部的。

#### module.exports ####

module.exports对象是通过模块系统产生的。因此，只需要将要导出的对象赋值给`module.exports`。例如，我们也可以使用下面的方法来写circle.js，这是完全等效的。

```javascript
// circle.js
var PI = Math.PI;
var circle = {};
circle.area = function (r) {
    return PI * r * r;
};
circle.circumference = function (r) {
    return 2 * PI * r;
};
module.exports = circle;
```

#### module.id ####

用于区别模块的标识符。通常是完全解析后的文件名。

#### module.filename ####

模块完全解析后的文件名。

#### module.parent ####

引入这个模块的模块。

### 查找流程 ###

当使用require()引用一个模块时，是按照如下流程根据表达式来查找目标模块的。

```javascript
require(X) from module at path Y
1. If X begins with './' or '/' or '../'
a. LOAD_AS_FILE(Y + X)
b. LOAD_AS_DIRECTORY(Y + X)
2. LOAD_NODE_MODULES(X, dirname(Y))
3. THROW "not found"

LOAD_AS_FILE(X)
1. If X is a file, load X as JavaScript text.  STOP
2. If X.js is a file, load X.js as JavaScript text.  STOP
3. If X.json is a file, parse X.json to a JavaScript Object.  STOP

LOAD_AS_DIRECTORY(X)
1. If X/package.json is a file,
a. Parse X/package.json, and look for "main" field.
b. let M = X + (json main field)
c. LOAD_AS_FILE(M)
2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
3. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP

LOAD_NODE_MODULES(X, START)
1. let DIRS=NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
a. LOAD_AS_FILE(DIR/X)
b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I >= 0,
a. if PARTS[I] = "node_modules" CONTINUE
c. DIR = path join(PARTS[0 .. I] + "node_modules")
b. DIRS = DIRS + DIR
c. let I = I - 1
5. return DIRS
```

## 内置模块 ##

内置模块与NodeJS一样，也必需先require才能使用。

### assert ###

该模块用于编写程序的单元测试用例，通过require('assert')调用。直接移植自NodeJS。

### events ###

事件处理模块，直接移植自NodeJS。

### fs ###

文件操作模块，兼容绝大部分NodeJS文件操作模块的同步操作API方法。

### http ###

HTTP请求与处理模块。移植并修改自NodeJS，绝大部分兼容。

### path ###

本模块包含一套用于处理和转换文件路径的工具集。几乎所有的方法只做字符串变换， 不会调用文件系统检查路径是否有效。

移植并修改自NodeJS，几乎完全兼容。

### punycode ###

编码和解码URL，完全兼容NodeJS。

### auerystring ###

处理URL查询字符串，完全兼容NodeJS。

### url ###

该模块包含用以 URL 解析的实用函数。 使用 require('url') 来调用该模块。

完全兼容NodeJS。

### util ###

辅助方法模块，兼容4.0以下版本的NodeJS。

## 编译NodeAsp源码 ##

编译NodeAsp源码需要安装node环境，同时需要全局安装uglifyJS。

在命令行中执行`node build`即可，编译好的文件位于bundle目录中。

```
C:\Disk\projects\NodeAsp>node build
-----------------------
# build nodeAsp success
+ build/NodeAsp.min.asp
@ 2016-03-01 13:46:04
-----------------------
```
  
## License ##

MIT