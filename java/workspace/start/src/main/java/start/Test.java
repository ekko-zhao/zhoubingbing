package start;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class Test {
	public static void main(String[] args) throws IOException {
		File file = new File("file/abc.txt");
		FileInputStream fi = new FileInputStream(file);
		
		BufferedInputStream f = new BufferedInputStream(fi);
		
		f.mark(1);
		System.out.println(f.read());
		f.reset();
		System.out.println(f.read());
		System.out.println(f.read());
		
		/*System.out.println(f.read());
		System.out.println(f.read());
		
		System.out.println(f.read());
		System.out.println(f.read());
		System.out.println(f.read());
		System.out.println(f.read());
		System.out.println(f.read());
		f.reset();
		System.out.println(f.read());
		System.out.println(f.read());
		f.reset();
		System.out.println(f.read());
		System.out.println(f.read());
		System.out.println(f.read());*/
		
		fi.close();

		// System.out.println();
	}
}
