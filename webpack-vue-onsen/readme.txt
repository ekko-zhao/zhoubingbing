
#项目采用技术
	打包器: wabpack + babel转码器
		// babel 用于es6语法到es5语法的编译 
		
	js框架 ：vue   https://cn.vuejs.org/
		// vue 轻量级， 编译后的源文件小 ，项目的加载速度快
		
	移动端框架： onsen ui ， 组件齐全 https://onsen.io/v2/api/vue/
	
	css编译技术采用 less
	
#前端环境搭建
	1. 安装nodejs 网址：http://nodejs.cn/
	
	2. cmd 命令 切换npm 仓库地址: npm config set registry https://registry.npmjs.org
	
		cmd 到当前文件目录下: npm install( 首次需要下载安装包。 等待完成 生成 node_modules 文件夹)


#项目开发环境
	当前文件目录下 cmd: npm run dev
	
#项目生产环境
	当前文件目录下 cmd: npm run build
	打包项目· 压缩代码
	当前文件目录下 会生成一个 dist 目录，把该目录copy 到 后台配置的根目录下（ 就是 localhost:端口 直接能访问的目录 默认 index.html）
	

#项目目录机构说明：
	api 				该文件夹 中有所有使用 技术的 ， 技术详解
	dist				为打包后的项目生产文件
	node_modules 		npm 包文件夹
	src 				项目源代码
	package.json		文件包 依赖  配置cmd 命令
	webpack.config.js	webpack 配置文件
		配置文件 中有个分发代理的配置需要 后台开发人员了解下
			devServer：{
				proxy: {
					"/api": {
						 target: "http://localhost:8071/bmmp4",
					}
				}
			}
			在开发环境中， 把所有 ajax 的请求 url 以 api开头的都分发到 指定的target 路径中
			这里需要注意的是 后台请求url 需要统一 以 api/** 开头
			
			比如我 开始异步请求数据：
				$http.post(
					'api/**/userStatus.aspx',
					{}
				)then(
					function(response){ console.log('ok') },
					function(error){ console.log('error') }
				)
			代理服务器 实际上会请求到  http://localhost:8071/bmmp4/api/**/userStatus.aspx 
			
	打包后copy 到后台配置的更目录下请求 api/**/userStatus.aspx
	
	
	
	
	
	
	
	
	
	
		