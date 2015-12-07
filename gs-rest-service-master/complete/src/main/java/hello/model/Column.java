package hello.model;

public class Column {
	private String pointPadding;

	private String borderWidth;

	public String getPointPadding() {
		return pointPadding;
	}

	public void setPointPadding(String pointPadding) {
		this.pointPadding = pointPadding;
	}

	public String getBorderWidth() {
		return borderWidth;
	}

	public void setBorderWidth(String borderWidth) {
		this.borderWidth = borderWidth;
	}

	@Override
	public String toString() {
		return "ClassPojo [pointPadding = " + pointPadding + ", borderWidth = "
				+ borderWidth + "]";
	}
}
