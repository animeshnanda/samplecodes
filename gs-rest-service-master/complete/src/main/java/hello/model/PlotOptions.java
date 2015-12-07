package hello.model;

public class PlotOptions {
	private Column column;

	public Column getColumn() {
		return column;
	}

	public void setColumn(Column column) {
		this.column = column;
	}

	@Override
	public String toString() {
		return "ClassPojo [column = " + column + "]";
	}
}
