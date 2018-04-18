package com.smart.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.MatrixVariable;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.smart.entity.User;

@Controller
@RequestMapping("/")
public class UserController {
	/*
	 * @RequestMapping("/index") 
	 * public @ResponseBody String test() { 
	 * return "hello, world! This com from spring!"; 
	 * }
	 */

	@RequestMapping(path = { "index", "" })
	public String index(HttpServletRequest request, ServletRequest servletRequest) {
		
		
		System.out.println("getMethod-"+request.getMethod());
		System.out.println("getPathInfo-"+request.getPathInfo());
		
		System.out.println("index");
		return "/index";
	}

	@RequestMapping(path = { "success" })
	public String success() {
		return "success";
	}
	
	@RequestMapping(path = { "showUserListByJson" })
	public String json(ModelMap mm) {
		List<User> userList = new ArrayList<User>();
		
		User user1 = new User();
		user1.setUserName("tom");
		user1.setUserId(123);
		userList.add(user1);
		mm.addAttribute("userList", userList);
		
		return "userList";
	}
	
	@RequestMapping(path = { "api/register" }, method = RequestMethod.POST)
	public String register(@Valid User user, BindingResult bindingResult) {
		
		// @Valid @ModelAttribute("user")  , BindingResult bindingResult
		System.out.println(bindingResult.getFieldError("userName"));
		
		System.out.println(bindingResult.getErrorCount());
		System.out.println(user.getUserName());
		System.out.println("register");
		return "success";
	}

}











