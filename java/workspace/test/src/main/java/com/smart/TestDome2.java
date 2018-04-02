package com.smart;




public class TestDome2{
	
	public synchronized void call(){
		System.out.println(Thread.currentThread().getName());
		
		/*System.out.print("[" + msg);
		try{
			Thread.sleep(1000);
		} catch(InterruptedException e) {
			
		}
		System.out.println("]");*/
	}
	
	
	public void tm(){
		try{
			System.out.println(Thread.currentThread().getName());
		} catch(Exception e) {
			
		}
		
	}
	//System.out.println(sn.getNextNum());
}

















