package start;

import java.io.*;
import java.util.*;


public class Test {
	public static void main(String[] args) {
		
		Package pags[];
		pags = Package.getPackages();
		
		for(int i=0; i< pags.length; i++){
			System.out.println(
					pags[i].getName()	
			);
		}
		
		
		
		
		
		
		
		
		// System.out.println();
	}
}
