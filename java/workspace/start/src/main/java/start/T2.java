package start;

public class T2 implements Runnable {
	String msg;
	T1 target;
	Thread t;

	public T2(T1 targ, String s){
		target = targ;
		msg = s;
		t = new Thread(this);
		t.start();
	}

	public void run() {
		target.call(msg);
	}
}
