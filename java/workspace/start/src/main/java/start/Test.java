package start;

public class Test<T> {
	static double num = 10.00;

	public static void main(String[] args) {
		int i = 10;
		
		T1 m;
		m = () -> {
			Test.num = 1;
			return Test.num;
		};
		
		System.out.println(m.m());
	}
}
