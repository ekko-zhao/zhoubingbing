package start;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PushbackInputStream;
import java.util.*;

public class Test {
	public static void main(String[] args) throws IOException {
		try (FileReader fr = new FileReader("file/abc.txt")) {
			System.out.println((char)fr.read());
		} catch (IOException e) {
			
		}
		char c = 'a';
		 System.out.println(c);
		// System.out.println();
	}
}
