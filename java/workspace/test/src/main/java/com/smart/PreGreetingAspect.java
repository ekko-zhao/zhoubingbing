package com.smart;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;


public class PreGreetingAspect  {
	
	public void beforeGreeting(){
		System.out.println("after");
	}
	
}
//   && com.smart.TestNamePointcut.inPackageTo()