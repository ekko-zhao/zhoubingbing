package com.smart;

public class NaiveWaiter implements Waiter {
	public void greetTo(){
		System.out.println("你好 :name");
	}
	
	public void serveTo(){
		System.out.println("服务 :serve");
	}
}
