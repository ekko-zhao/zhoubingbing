package start;

import start.dome0.Box;

public class Test {
	public static void main(String[] args) {
		int a[] = new int[10];
		// TODO Auto-generated method stub
		try{
			System.out.println(a[50]);
		}catch(Throwable e){
			System.out.println(e);
		}finally{
			System.out.println(11);
		}
		
	}
}
