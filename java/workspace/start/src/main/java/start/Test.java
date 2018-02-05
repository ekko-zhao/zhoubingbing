package start;

import java.lang.reflect.*;

public class Test {
	@MyAnno(str = "Annotation Example", val = 99)
	public static void myMeth2() {
	}
	
	@MyAnno(str = "Annotation Example", val = 100)
	public static void myMeth() {
		Test t = new Test();
		
		try {
			Class<?> c = t.getClass();
			Method m = c.getMethod("myMeth2");
			MyAnno anno = m.getAnnotation(MyAnno.class);
			System.out.println(anno.str() + " " + anno.val());
		} catch (NoSuchMethodException e) {
			System.out.println("Method not find");
		}
	}

	public static void main(String[] args) {
		myMeth();
	}
}
