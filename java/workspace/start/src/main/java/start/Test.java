package start;

public class Test {

	/*
	 * public void run() { try { for (int n = 5; n > 0; n--) {
	 * System.out.println("child thread" + n); Thread.sleep(3000); } } catch
	 * (InterruptedException e) { System.out.println(
	 * "child thread InterruptedException"); } System.out.println(
	 * "Exiting child thread"); }
	 */

	public static void main(String[] args) {
		T1 target = new T1();
		T2 ob1 = new T2(target, "Hello");
		T2 ob2 = new T2(target, "Synchronized");
		T2 ob3 = new T2(target, "World");
		
		try{
			ob1.t.join();
			ob2.t.join();
			ob3.t.join();
		} catch(InterruptedException e) {
			
		}
	}
}
