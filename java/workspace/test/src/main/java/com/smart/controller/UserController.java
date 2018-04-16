package com.smart.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.MatrixVariable;
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
	public String index() {
		// System.out.println(a); method = RequestMethod.GET
		// System.out.println(author);
		System.out.println("index");
		return "/index";
	}

	@RequestMapping(path = { "success" })
	public String success() {
		return "success";
	}
	
	
	@RequestMapping(path = { "api/register" }, method = RequestMethod.POST)
	public String register(User user, HttpSession httpSession) {
		Enumeration name = httpSession.getAttributeNames();
		if(name.hasMoreElements()) {
			name.nextElement();
		}
		
		System.out.println("register");
		return "success";
	}

}










