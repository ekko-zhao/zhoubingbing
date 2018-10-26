package com.example.springboot.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.config.BookProperties;
import com.example.springboot.util.SpringUtil;

@Controller
@RequestMapping("/")
public class IndexController {

	@RequestMapping(value = { "", "/login" })
	String indexHandler() throws InterruptedException {
		BookProperties book = SpringUtil.getBean("handler", BookProperties.class);
		System.out.println(book.getId());
		return "login";
	}

	@RequestMapping(path = { "local/login" }, method = RequestMethod.POST)
	@ResponseBody
	public ApiResponse loginHandler(HttpServletRequest request, HttpServletResponse response, @RequestBody User user) throws InterruptedException {
		/*Thread t = Thread.currentThread();
		for (int i = 5; i > 0; i--) {
			System.out.println(i);
			System.out.println(t.getName());
			t.sleep(1000);
		}*/

		ApiResponse apiResponse = new ApiResponse();
		return apiResponse;
	}

}
