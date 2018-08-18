
项目 框架 webpack angular2 bootstrap
/*
	安装 nodejs
	更改镜像:cmd: npm config set registry https://registry.npm.taobao.org
	开发环境 cmd: npm install 或者解压 node_modules.zip
*/

开发环境:
	当前目录 cmd: npm run dev
	编译完成后在浏览器 中打开： http://localhost:3013/
	
测试部署:
	当前目录 cmd: npm run build
	编译完成后生成 dist 文件夹，拷贝到spring-boot 工程 resources/ 文件夹下
	
生产部署:
	当前目录 cmd: npm run build-prod
	编译完成后生成 dist 文件夹，拷贝到spring-boot 工程 resources/ 文件夹下


#url 命名规范
	/local/url 指向本地服务器
	/api/url 指向远程服务器

# 项目样式 ----------------------------------------------------------------------------------------
	less 编译
	src/assets/app.less
	
	bootstrap 4.1.1 部分样式
	bootstrap 3.3.7	部分样式

	字体网址：http://fontawesome.dashgame.com/

