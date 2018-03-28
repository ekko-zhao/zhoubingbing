package com.smart;

public class NaiveWaiter implements Waiter {
	@MyAnno
	public void greetTo(String str, int age){
		System.out.println("你好 :name");
	}
	
	public void serveTo(){
		System.out.println("服务 :serve");
	}
}
