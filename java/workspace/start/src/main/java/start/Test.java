package start;

public class Test<T> {
	public static void main(String[] args) {
		StringBuffer s = new StringBuffer("abc");
		s.setCharAt(2, 'e');
		System.out.println(s);
	}
}
