
控制器地址的映射匹配：
	<servlet-mapping>
		<servlet-name>springmvc</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>

前端页面以静态资源 html 显示，spring视图解析器后缀配置为 ".html"

服务端返回数据规范：
	{
		data:{} | [] | String,
		message:"成功",
		code："000000"
	}
	data 	可以为对象、数组或者是字符串。 依据页面需求而定
	message 为返回的信息
	code	
		请求成功为 			"000000"
		超时、未登陆		"666666"
		数据验证失败、其它	"999999"
	
服务端接受请求规范：
	所有Ajax POST 请求以 Content-type："application/json; charset=utf-8;" 方式提交

	Ajax 请求的sevlet url部分需要以 "/api" 开始，作为前后端分离开发规范。 例如:
		@RequestMapping(value="/api/login")
		@ResponseBody
		public Object handler(@RequestBody User user){
			//...
			return Object;
		}
	
	Ajax 请求的sevlet url需要 登陆权限， 以 "/api/authorize/" 开始， 以方便拦截器匹配拦截，检查是否登陆，或者超时等
		// servlet.xml 配置
		<mvc:interceptors>
			<mvc:interceptor>
				<mvc:mapping path="/api/authorize/*" />
				<bean class="com.controller.MyInterceptor" />
			</mvc:interceptor>
		</mvc:interceptors>
		
		public class MyInterceptor implements HandlerInterceptor {
			@Override
			public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
				// ...
				return true;
			}
		}
