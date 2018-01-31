package start;

public class T1 {
	public synchronized void call(String msg){
		System.out.print("[" + msg);
		try{
			Thread.sleep(1000);
		} catch(InterruptedException e) {
			
		}
		System.out.println("]");
	}
}
