
项目 框架 webpack angular2 bootstrap
/*
	安装 nodejs
	更改镜像:cmd: npm config set registry https://registry.npm.taobao.org
	开发环境 cmd: npm install 或者解压 node_modules.zip
	
	本地没有安装webpack的再安装 webpack
	npm install -g webpack-cli
	安装后再 npm link webpack
*/


env.config.js
	origin 为测试服务器地址
	origin-prod 为生产服务器地址

开发环境:
	当前目录 cmd: npm run dev
	编译完成后在浏览器 中打开： http://localhost:3014/

测试部署:
	如果是在 OS 系统中， 需要 修改 .bash_prifile 配置文件，添加 export NODE_ENV=development
	
	当前目录 cmd: npm run build
	编译完成后生成 dist 文件夹，把该文件夹的所有内容移动到spring-boot 工程 resources/distdev 文件夹下

生产部署:  
	如果是在 OS 系统中， 需要 修改 .bash_prifile 配置文件，添加 export NODE_ENV=production

	检查 env.config.js 的 "origin-prod" 属性是否为 生产服务器地址
	当前目录 cmd: npm run build-prod
	编译完成后生成 dist 文件夹，移动到spring-boot 工程 resources/ 文件夹下
	
mvn 打包 ：
	mvn 项目打包时请设置 src\main\resources\application.properties 配置文件 spring.profiles.active
	dev 为发布到测试环境
	prod 为发布到生成环境
	spring.profiles.active = dev|prod

#url 命名规范
	/local/url 指向本地服务器
	/huijingcai/url 指向远程服务器

# 项目样式 ----------------------------------------------------------------------------------------
	less 编译
	src/assets/app.less

	bootstrap 4.1.1 部分样式
	bootstrap 3.3.7	部分样式

	字体网址：http://fontawesome.dashgame.com/

