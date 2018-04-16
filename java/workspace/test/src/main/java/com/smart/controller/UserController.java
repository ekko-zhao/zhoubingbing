package com.smart.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.MatrixVariable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smart.entity.User;

@Controller
@RequestMapping("/")
public class UserController {
	/*
	 * @RequestMapping("/index") public @ResponseBody String test() { return
	 * "hello, world! This com from spring!"; }
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

	@RequestMapping(path = { "api/register/{id}" }, method = RequestMethod.GET)
	public String register(User user, @MatrixVariable(required=false) String author2, @MatrixVariable(value="author") Map<String,String> a) {
		System.out.println("register");
		System.out.println(a.get("age"));
		System.out.println(author2);
		return "success";
	}

}
