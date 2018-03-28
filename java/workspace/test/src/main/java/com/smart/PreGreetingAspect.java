package com.smart;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class PreGreetingAspect  {
	/*@Around("@annotation(com.smart.MyAnno)")
	public void beforeGreeting(ProceedingJoinPoint pjp){
		System.out.println(pjp.getSignature());
		System.out.println("bbb");
	}*/
	@Before("@annotation(com.smart.MyAnno) && args(name, num)")
	public void beforeGreeting(String name, int num){
		System.out.println(name);
		System.out.println(num);
		//System.out.println("bbb");
	}
	
}
//   && com.smart.TestNamePointcut.inPackageTo()