package start;

public class Test<T> {
	void showType(String str) {
		System.out.println(str.getClass().getName());
	}

	public static void main(String[] args) {
		Test t = new Test();
		t.showType("2323");
		// System.out.println("22");
	}
}
