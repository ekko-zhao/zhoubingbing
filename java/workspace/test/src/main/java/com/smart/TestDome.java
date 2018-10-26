package com.smart;

public class TestDome implements Runnable {
	Thread t;

	TestDome() {
		t = new Thread(this, "demo thread");
		t.start();
	}

	public void run() {
		try {
			for (int i = 5; i > 0; i--) {
				System.out.println(i);
				System.out.println(t.getName());
				t.sleep(1000);
			}
		}catch(InterruptedException e) {
			
		}
		System.out.println("demo exit");
	}

	public static void main(String[] str) {

	}
	// System.out.println();
}
