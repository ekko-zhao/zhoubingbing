package com.smart.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
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
import org.springframework.validation.Errors;
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

import net.sf.json.JSON;

@Controller
@RequestMapping("/")
public class UserController {
	/*
	 * @RequestMapping("/index") public @ResponseBody String test() { return
	 * "hello, world! This com from spring!"; }
	 */
	
	@RequestMapping(path = { "login" })
	public String loginHandler(HttpServletRequest request, ServletRequest servletRequest) {
		System.out.println("index");
		return "login";
	}
	
	@RequestMapping(path = { "index", "" })
	public String index(HttpServletRequest request, ServletRequest servletRequest) {
		System.out.println("index");
		return "index";
	}
	

	@RequestMapping(path = { "api/login" }, method = RequestMethod.POST)
	@ResponseBody
	public Map register(@RequestBody @Valid User user, BindingResult bindingResult, HttpServletRequest request)
			throws Exception {
		System.out.println(user.getName());
		System.out.println(user.getPassword());

		System.out.println(bindingResult.getErrorCount());
		System.out.println(request.getHeader("Content-Type"));
		System.out.println("register");

		Map map = new HashMap();
		map.put("data", user);
		map.put("code", "000000");
		map.put("message", "message");
		// throw new Exception("asd");

		// System.out.println(HttpStatus.UNAUTHORIZED);
		Thread.sleep(1000*1);
		return map;
	}

}
