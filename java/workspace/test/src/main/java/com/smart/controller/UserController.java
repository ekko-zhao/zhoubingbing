package com.smart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
	/*
	 * @RequestMapping("/index") public @ResponseBody String test() { return
	 * "hello, world! This com from spring!"; }
	 */

	@RequestMapping(value = { "/hello", "/index", "/", "" })
	public String index() {
		return "index";
	}

}
