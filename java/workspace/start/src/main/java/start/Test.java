package start;

interface MyFunc<O, T> {
	O[] func(T v);
}

class MyClass<T> {
	public T val;

	MyClass(T v) {
		val = v;
	}

	T getVal() {
		return val;
	}
}

public class Test<T> {
	public static void main(String[] args) {
		MyFunc<MyClass<Integer>, Integer> f = MyClass[]::new;
		
		MyClass[] myClass = f.func(10);
		myClass[0] = new MyClass(10);
		myClass[1] = new MyClass(20);
	}
}
