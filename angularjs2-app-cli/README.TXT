
tsconfig.json

"files"指定一个包含相对或绝对文件路径的列表。
* 匹配0或多个字符（不包括目录分隔符）
? 匹配一个任意字符（不包括目录分隔符）
**/ 递归匹配任意子目录

如果一个glob模式里的某部分只包含*或.*，那么仅有支持的文件扩展名类型被包含在内（比如默认.ts，.tsx，和.d.ts， 如果allowJs设置能true还包含.js和.jsx）。

如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（.ts,.d.ts 和 .tsx），排除在"exclude"里指定的文件。JS文件（.js和.jsx）也被包含进来如果allowJs被设置成true。 如果指定了 "files"或"include"，编译器会将它们结合一并包含进来。 使用 "outDir"指定的目录下的文件永远会被编译器排除，除非你明确地使用"files"将其包含进来（这时就算用exclude指定也没用）。

使用"include"引入的文件可以使用"exclude"属性过滤。 然而，通过 "files"属性明确指定的文件却总是会被包含在内，不管"exclude"如何设置。 如果没有特殊指定， "exclude"默认情况下会排除node_modules，bower_components，和jspm_packages目录。

任何被"files"或"include"指定的文件所引用的文件也会被包含进来。A.ts引用了B.ts，因此B.ts不能被排除，除非引用它的A.ts在"exclude"`列表中。

{
  "compileOnSave": false,
  "compilerOptions": {
	--allowJs: true // boolean true #允许编译javascript文件
	--allowSyntheticDefaultImports   // boolean  module === "system" 允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
	--allowUnreachableCode // boolean false 不报告执行不到的代码错误。
	--allowUnusedLabels // boolean false 不报告未使用的标签错误
	--baseUrl // string 解析非相对模块名的基准目录
	--charset // string "utf8" 输入文件的字符集。
	--declaration  // boolean false 生成相应的'.d.ts'文件。
	--declarationDir //string 生成声明文件的输出路径。
	--diagnostics	// boolean false 显示诊断信息
	--disableSizeLimit // boolean false 禁用JavaScript工程体积大小的限制
	--emitBOM // boolean false 在输出文件的开头加入BOM头（UTF-8 Byte Order Mark）
	--emitDecoratorMetadata // boolean false 给源码里的装饰器声明加上设计类型元数据。
	--experimentalDecorators // boolean false 实验性启用ES7装饰器支持。
	--forceConsistentCasingInFileNames // boolean false 不允许不一致包装引用相同的文件。
	
	—inlineSourceMap  // boolean false 生成单个sourcemaps文件，而不是将每sourcemaps生成不同的文件。
	--inlineSources  // boolean false 将代码与sourcemaps生成到一个文件中，要求同时设置了--inlineSourceMap或--sourceMap属性。
	--isolatedModules  // boolean false 无条件地给没有解析的文件生成imports。	
	--jsx	//string  "Preserve" 在'.tsx'文件里支持JSX：'React' 或 'Preserve'。
	--lib string[] 编译过程中需要引入的库文件的列表。
		es5 es6 es2015 es7 es2016 （ es2017 dom webworker scripthost ） 
		es2015.core es2015.collection es2015.generator es2015.iterable es2015.promise es2015.proxy es2015.reflect es2015.symbol
		es2015.symbol.wellknown es2016.array.include es2017.object es2017.sharedmemory
		
		注意：如果--lib没有指定默认库。默认库是 --target ES5: dom,es5,scripthost  --target ES6:  dom,es6,dom.iterable,scripthost
	
	--listEmittedFiles  // boolean false 打印出编译后生成文件的名字。
	--listFiles  // boolean false 编译过程中打印文件名
	--locale // string 显示错误信息时使用的语言，比如：en-us。
	--maxNodeModuleJsDepth // number 0 node_modules下的最大依赖深度搜索并加载JavaScript文件。仅适用于使用--allowJs。
	--module // string 指定生成哪个模块系统代码：'commonjs'，'amd'，'system'，或 'umd'或'es2015'。只有'amd'和'system'能和--outFile一起使用。当目标是ES5或以下的时候不能使用'es2015'。
	--moduleResolution // string  module === 'amd' | 'system' | 'ES6' ? 'classic' : 'node'
	--newLine // string 当生成文件时指定行结束符：'CRLF'（dos）或 'LF' （unix）。
	--noEmit // boolean false 不生成输出文件
	--noEmitOnError // boolean false 报错时不生成输出文件。
	--noImplicitAny //boolean false 在表达式和声明上有隐含的'any'类型时报错。
	--noImplicitReturns	//boolean false 不是函数的所有返回路径都有返回值时报错。
	—--noImplicitThis //boolean false 当this表达式的值为any类型的时候，生成一个错误。
	--noImplicitUseStrict //boolean false 模块输出中不包含'use strict'指令。
	--noLib //boolean false 不包含默认的库文件（lib.d.ts）。
	--noResolve  //boolean false 不把/// <reference``>或模块导入的文件加到编译文件列表	 
	--noUnusedLocals //boolean false 若有未使用的局部变量则抛错
	--noUnusedParameters //boolean false 若有未使用的参数则抛错
	--outDir //string 重定向输出目录
	--outFile //string  将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和///<reference``>和import的文件顺序决定的。查看输出文件顺序文件了解详情。
	paths //Object 模块名到基于baseUrl的路径映射的列表。
	--preserveConstEnums  //boolean false 保留const和enum声明。
	
	--pretty //boolean false 给错误和消息设置样式，使用颜色和上下文。
	--reactNamespace //string "React" 当目标为生成'react' JSX时，指定createElement和__spread的调用对象
	--removeComments //boolean false 删除所有注释，除了以/!*开头的版权信息。


	--strictNullChecks //boolean false 在严格的null检查模式下，null和undefined值不包含在任何类型里，只允许用它们自己和any来赋值（有个例外，undefined可以赋值到void）。
	--suppressImplicitAnyIndexErrors //boolean false 阻止--noImplicitAny对缺少索引签名的索引对象报错

	--target //string "ES5" 指定ECMAScript目标版本'ES3' (默认)，'ES5'，或'ES6'[1]
	--traceResolution // boolean false 生成模块解析日志信息
	--types // string[] 要包含的类型声明文件名列表
	--typeRoots // string[]  要包含的类型声明文件路径列表

	
	--init 初始化TypeScript项目并创建一个tsconfig.json文件。
	--help 打印帮助信息。
	--version
	--watch 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。
}








npm install -g @angular/cli

ng new [name]-----------------------------------------------------------------------------------
创建一个新的angular应用程序
默认应用程序在同名的目录中创建，并初始化了Angular应用程序
/*
	Options
*/

directory 
--directory (alias: -dir) default value: dir
用于创建应用程序的目录名称

dry-run 
--dry-run (alias: -d) default value: false
运行而不进行任何更改

inline-style 
--inline-style (alias: -is) default value: false
应该有一个内联样式

inline-template 
--inline-template (alias: -it) default value: false
应该有一个内联模板

prefix 
--prefix (alias: -p) default value: app
用于所有组件选择器的前缀

routing
--routing default value: false
生成路由模块

skip-commit
--skip-commit (alias: -sc) default value: false
跳过提交第一个提交git

skip-git
--skip-git (alias: -sg) default value: false
跳过初始化git存储库

skip-install
--skip-install (alias: -si) default value: false
跳过安装包

skip-tests
--skip-tests (aliases: -st) default value: false
跳过创建规格文件

source-dir
--source-dir (alias: -sd) default value: src
源目录的名称

style
--style default value: css
样式文件默认扩展名

verbose
--verbose (alias: -v) default value: false
Adds more details to output logging



ng serve-------------------------------------------------------------------------------------
构建应用程序并启动Web服务器
所有构建选项都可以提供，下面是附加选项

--host (aliases: -H) default value: localhost
默认情况下仅在localhost上侦听

--hmr default value: false
启用热模块更换

--live-reload (aliases: -lr) default value: true
是否重新加载页面的更改，使用实时重新加载

--public-host (aliases: --live-reload-client)
指定浏览器客户端将使用的URL

--disable-host-check default value: false
不验证连接的客户端是允许的主机的一部分

--open (aliases: -o) default value: false
在默认浏览器中打开网址

--port (aliases: -p) default value: 4200
端口服务

--ssl
Serve using HTTPS

--ssl-cert (aliases: -) default value:
用于提供HTTPS的SSL证书

--ssl-key
用于提供HTTPS的SSL密钥

--aot
构建使用时间编译

--base-href (aliases: -bh)
正在构建的应用程序的基本URL

--deploy-url (aliases: -d)
将部署文件的URL

--environment (aliases: -e)
定义内置环境

--extract-css (aliases: -ec)
将CSS从全局样式提取到css文件而不是js文件


--i18n-file
用于i18n的本地化文件

--i18n-format
使用--i18n-file指定的本地化文件的格式

--locale
用于i18n的区域设置

--output-hashing (aliases: -oh) default value:
定义输出文件名缓存清除散列模式。 可能的值: none, all, media, bundles

--output-path (aliases: -op) default value:
将放置输出的路径

--poll
启用和定义文件观看轮询时间段（毫秒）


--progress (aliases: -pr) default value: true
建立时将进度记录到控制台


--sourcemap (aliases: -sm, sourcemaps)
Output sourcemaps

--target (aliases: -t, -dev, -prod) default value: development
定义构建目标

--vendor-chunk (aliases: -vc) default value: true
使用仅包含供应商库的单独的包

--verbose (aliases: -v) default value: false
添加更多详细信息到输出日志记录

--watch (aliases: -w)
当文件更改时运行构建


ng generate-----------------------------------------------------------------------------------------------

ng generate class [name]---------------------
generates a class

//Options

--app (aliases: -a) default value: 1st app
Specifies app name to use

--spec
Specifies if a spec file is generated


ng generate component [name] ---------------
generates a component

//Options

--app (aliases: -a) default value: 1st app

--change-detection (aliases: -cd)
Specifies the change detection strategy.


--flat default value: false
标记以指示是否创建了目录

--export default value: false
Specifies if declaring module exports the component

--inline-style (aliases: -is) default value: false
指定样式是否在ts文件中

--inline-template (aliases: -it) default value: false
指定模板是否在ts文件中


--module (aliases: -m)
允许声明模块的文件名

--prefix
指定是否使用前缀

--skip-import default value: false
允许跳过模块导入

--spec

--view-encapsulation (aliases: -ve)
指定视图封装策略


ng generate directive [name] ---------------
generates a directive

//Options
--app

--export default value: false

--flat

--module (aliases: -m)

--prefix

--skip-import

--spec


ng generate enum [name]  ---------------
//generates an enumeration

//Options
--app



ng generate interface ---------------
ng generate interface [name] <type> generates an interface
--app


ng generate module ---------------
ng generate module [name] generates an NgModule

--app
--flat
--module (aliases: -m)
--spec

--routing
指定是否应生成路由模块文件



ng generate pipe ------------------------
ng generate pipe [name] generates a pipe

--app (aliases: -a) default value: 1st app
--export
--flat
--module (aliases: -m)
--skip-import
--spec


ng generate service ------------------------
ng generate service [name] generates a service


--app (aliases: -a) default value: 1st app
--flat
--module (aliases: -m)
--spec

ng lint----------------------------------------------------------------------------------------------
//将使用tslint将您的应用程序代码拖出


--fix default value: false
修复linting错误（可能会覆盖linted文件）

--force默认值：false
即使有瑕疵错误也能成功


--type-check default value: false
控制纸张类型检查

--format (aliases: -t) default value: prose
输出格式 (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).


ng build--------------------------------------------------------------------------------------------------
将应用程序编译成输出目录

# these are equivalent
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
# and so are these
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build


//在index.html中将base tag href设置为 ./

ng build --base-href ./
ng build --bh ./


//Options
--app
Specifies app name or index to use

--base-href (aliases: -bh)
Base url for the application being built.

--deploy-url (aliases: -d)
将部署文件的URL

--environment (aliases: -e)
定义内置环境

--extract-css (aliases: -ec)
将CSS从全局样式提取到css文件而不是js文件

--i18n-file
--i18n-format
--locale
--output-hashing (aliases: -oh)
--output-path (aliases: -op)
--poll
--progress (aliases: -pr) default value: true
--sourcemap (aliases: -sm, sourcemaps)

--stats-json
生成一个stats.json文件，可以使用以下工具进行分析：webpack-bundle-analyzer或https://webpack.github.io/analyse。









