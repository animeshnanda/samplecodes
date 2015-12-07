package hello.model;

public class Title {
	private String text;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return "ClassPojo [text = " + text + "]";
	}
}