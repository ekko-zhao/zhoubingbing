package com.smart;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test implements ApplicationContextAware{
	private ApplicationContext ctx;
	
	public static void main(String[] agrs){
		// ApplicationContext ctx = new ClassPathXmlApplicationContext();
		// System.out.println();
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		this.ctx = applicationContext;
	}
}
