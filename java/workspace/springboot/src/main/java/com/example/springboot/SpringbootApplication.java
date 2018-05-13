package com.example.springboot;

import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.springboot.config.BookProperties;
import com.example.springboot.config.SpringConfig;

import com.example.springboot.util.*;

@SpringBootApplication
public class SpringbootApplication {
	/*
	 * BookProperties book = SpringUtil.getBean(BookProperties.class);
	 * System.out.println(book.getId());
	 */
	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}
}
