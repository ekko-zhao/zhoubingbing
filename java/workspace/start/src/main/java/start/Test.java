package start;

public class Test implements Runnable {
	private T1 t1;

	public Test(T1 t1) {
		this.t1 = t1;
	}

	public void run() {
		t1.doSomthing();
	}

	public static void main(String[] args) {
		T1 t0 = new T1(4, "DAVID");
		
		
		System.out.println(new Test(t0).equals(new Test(t0)));
		
		
		Thread t1 = new Thread(new Test(t0));
		t1.setName("Thread1");
		Thread t2 = new Thread(new Test(t0));
		t2.setName("Thread2");
		Thread t3 = new Thread(new Test(t0));
		t3.setName("Thread3");
		Thread t4 = new Thread(new Test(t0));
		t4.setName("Thread4");
		t1.start();
		t2.start();
		t3.start();
		t4.start();
	}
}
