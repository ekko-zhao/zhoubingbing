package start;

import java.io.*;

public class Test {
	public static void main(String[] args) throws IOException {
		// System.out.println();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str[] = new String[100];
		for (int i = 0; i < 100; i++) {
			str[i] = br.readLine();
			if (str[i].equals("stop"))
				break;
		}
		for (int i = 0; i < 100; i++) {
			if (str[i].equals("stop"))
				break;
			System.out.println(str[i]);
		}
		System.out.println("22");
		/*
		 * String str; do { str = br.readLine(); System.out.println(str); }
		 * while (!str.equals("stop"));
		 */

	}
}
