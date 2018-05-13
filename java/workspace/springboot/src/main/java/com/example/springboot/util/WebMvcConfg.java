package com.example.springboot.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.springboot.config.BookProperties;

@Configuration
public class WebMvcConfg implements WebMvcConfigurer {
	@Autowired
	public HttpMessageConverters httpMessageConverters;
	
	@Override
	public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
		
		for (HttpMessageConverter<?> messageConverter : httpMessageConverters) {
			System.out.println(messageConverter);
		}
		System.out.println(111);
		for (HttpMessageConverter<?> messageConverter : converters) {
			System.out.println(messageConverter); // 2
		}
	}
	// configureMessageConverters
}
