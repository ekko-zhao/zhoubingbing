package start.dome0;

public class Box {
	int width;
	int height;
	
	public int volume() {
		return width * height;
	}

	public Box() {
		this.width = -1;
		this.height = -1;
	}

	public Box(int width, int height) {
		this.width = width;
		this.height = height;
	}
	
	class Name{
		public void mains() {
			System.out.println(width);
		}
	}

	public static void main(String[] args) {
		// System.out.println(width);
	}
}
