package start.dome0;

public class Box {
	int width;
	int height;

	public int volume() {
		return width * height;
	}

	public Box(int width, int height) {
		this.width = width;
		this.height = height;
	}

	public static void main(String[] args) {
		
		// System.out.println(width);
	}
}
