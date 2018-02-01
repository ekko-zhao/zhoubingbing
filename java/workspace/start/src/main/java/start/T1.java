package start;

public class T1 {
	private int counter = 0;
	private String name = null;

	public T1(int counter, String name) {
		this.counter = counter;
		this.name = name;
	}

	public synchronized void doSomthing() {
		int tempCounter = --counter;
		if (tempCounter <= 0) {
			notify();
		} else {
			while (tempCounter > 0) {
				try {
					System.out.println(Thread.currentThread().getName() + "-000");
					--tempCounter;
					System.out.println(tempCounter);
					wait();

				} catch (InterruptedException e) {
					
				}
				System.out.println(Thread.currentThread().getName() + "-111");
			}
			notify();
		}
	}

	/*public void customizedNotifyAll() {
		notifyAll();
		System.out.println(Thread.currentThread().getName() + "-222");
	}*/

}
