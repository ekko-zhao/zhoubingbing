package com.smart.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smart.entity.User;

@Controller
@RequestMapping(value = {"/"})
public class UserController {
	/*
	 * @RequestMapping("/index") public @ResponseBody String test() { return
	 * "hello, world! This com from spring!"; }
	 */
	// @CookieValue("JSESSIONID") String sessionId
	@RequestMapping(value = {"/index", ""})
	public String index(HttpServletRequest request) {
		System.out.println(request.getSession().getId());
		return "index";
	}
	
	
	@RequestMapping(value = {"/success"})
	public String success() {
		return "success";
	}
	
	@RequestMapping(value = {"/register"}, method=RequestMethod.POST)
	public String register(User user) {
		// System.out.println(sessionId);
		
		System.out.println("register");
		System.out.println(user.getUserName());
		return "success";
	}
	
}








