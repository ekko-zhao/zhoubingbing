
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









