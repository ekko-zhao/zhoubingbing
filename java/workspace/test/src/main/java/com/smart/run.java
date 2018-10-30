package com.smart;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class run {
	public static void main(String[] args) {
		int i;
		
		try (
				FileInputStream fina = new FileInputStream("C:\\Users\\Administrator\\Desktop\\a.txt")) {
			do {
				i = fina.read();
				if (i != -1)
				{
					System.out.println((char) i);
					
				}
			} while (i != -1);
		} catch (FileNotFoundException e) {
		} catch (IOException e3) {}

	}
}