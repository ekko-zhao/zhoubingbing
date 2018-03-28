package com.smart;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
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
	@AfterReturning(value="@annotation(com.smart.MyAnno)", returning="retVal")
	public void beforeGreeting(int retVal){
		System.out.println(retVal);
	}
	
}
//   && com.smart.TestNamePointcut.inPackageTo()