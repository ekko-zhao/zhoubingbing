package com.smart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class UserController {
	@RequestMapping("/register")
	public String index() {
		return "index";
	}
	@RequestMapping("/register")
	public String register() {
		return "index";
	}
}
