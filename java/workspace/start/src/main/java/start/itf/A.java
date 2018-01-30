package start.itf;

public interface A extends B {
	default void cc() {
		System.out.println('A');
	}
}
