package com.smart;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class PreGreetingAspect {
	@Before("@within(MyAnno)")
	public void beforeGreeting(){
		System.out.println("bbb");
	}
}
