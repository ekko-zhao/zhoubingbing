package start;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Test<T> {
	public static void main(String[] args) throws ParseException, InterruptedException {
		Formatter f = new Formatter();
		f.format("%tT", new Date());
		
		System.out.println(f);
		
	}
}
