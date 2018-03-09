package start;

import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Test {
	public static void main(String[] args) throws IOException {
		String instr = "Name: Tom Age: 28 id:77";
		Scanner conin = new Scanner(instr);
		conin.skip("Named");
			// s -> "Age:"
		if(conin.hasNext())
			System.out.println(conin.next());
			// 28
		conin.close();
		
		// System.out.println();
	}
}
