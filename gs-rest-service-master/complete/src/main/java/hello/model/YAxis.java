package hello.model;

public class YAxis {
	private String min;

	private Title title;

	private Integer minorTickInterval;

	public String getMin() {
		return min;
	}

	public void setMin(String min) {
		this.min = min;
	}

	public Title getTitle() {
		return title;
	}

	public void setTitle(Title title) {
		this.title = title;
	}

	public Integer getMinorTickInterval() {
		return minorTickInterval;
	}

	public void setMinorTickInterval(Integer minorTickInterval) {
		this.minorTickInterval = minorTickInterval;
	}

	@Override
	public String toString() {
		return "ClassPojo [min = " + min + ", title = " + title + "]";
	}
}