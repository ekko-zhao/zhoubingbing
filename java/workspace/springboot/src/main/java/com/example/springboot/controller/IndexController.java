package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.config.BookProperties;
import com.example.springboot.util.SpringUtil;

@Controller
public class IndexController {
	
	@RequestMapping(value= {"/","/index"})
	String indexHandler() {
		BookProperties book = SpringUtil.getBean("handler", BookProperties.class);
		System.out.println(book.getId());
		return "index"; 
	}
	
	
}
