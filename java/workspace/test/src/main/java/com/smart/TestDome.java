package com.smart;

import org.junit.Test;
import org.springframework.aop.BeforeAdvice;
import org.springframework.aop.framework.ProxyFactory;

public class TestDome {
	@Test
	public void befor(){
		NaiveWaiter target = new NaiveWaiter();
		BeforeAdvice advice = new GreetingBeforeAdvice();
		
		// Spring 提供的代理工厂
		ProxyFactory pf = new ProxyFactory();
		
		// 设置代理目标
		pf.setTarget(target);
		
		// 为代理目标添加增强
		pf.addAdvice(advice);
		
		// 生成代理实例
		NaiveWaiter proxy = (NaiveWaiter)pf.getProxy();
		proxy.greetTo();
	}
}
