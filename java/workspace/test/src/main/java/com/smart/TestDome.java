package com.smart;

import org.junit.Test;
import org.springframework.aop.BeforeAdvice;
import org.springframework.aop.aspectj.annotation.AspectJProxyFactory;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestDome {
	@Test
	public void befor(){
		/*ApplicationContext ctx = new ClassPathXmlApplicationContext("com/smart/beanfactory/beans.xml");
		Waiter waiter = (Waiter)ctx.getBean("waiter");
		waiter.greetTo();*/
	}
}
