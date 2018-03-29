package com.smart;

public class NaiveWaiter implements Waiter {
	// @MyAnno
	public int greetTo(String str, int age){
		System.out.println("你好 :name");
		return 100;
	}
	
	public void serveTo(){
		System.out.println("服务 :serve");
	}
}
