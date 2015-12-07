package hello.model;

public class XAxis {
	private String crosshair;

	private String categories;
	Title title;
	

	

	public Title getTitle() {
		return title;
	}

	public void setTitle(Title title) {
		this.title = title;
	}

	public String getCrosshair() {
		return crosshair;
	}

	public void setCrosshair(String crosshair) {
		this.crosshair = crosshair;
	}

	public String getCategories() {
		return categories;
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	@Override
	public String toString() {
		return "ClassPojo [crosshair = " + crosshair + ", categories = "
				+ categories + "]";
	}
}