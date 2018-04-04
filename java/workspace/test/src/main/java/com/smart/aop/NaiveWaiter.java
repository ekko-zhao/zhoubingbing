package com.smart.aop;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.smart.mixdao.UserService;

@MyAnno
public class NaiveWaiter {
	public void greetTo(){
		System.out.println("greetTo");
	}
	@Test
	public void test() throws SQLException{
		
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("com/smart/beansaop.xml");
		NaiveWaiter naiveWaiter = (NaiveWaiter) ctx.getBean("naiveWaiter");
		naiveWaiter.greetTo();
	}
}
