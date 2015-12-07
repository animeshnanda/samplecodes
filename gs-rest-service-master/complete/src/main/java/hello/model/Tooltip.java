package hello.model;

public class Tooltip {
	private String shared;

	private String useHTML;

	private String footerFormat;

	private String pointFormat;

	private String headerFormat;

	public String getShared() {
		return shared;
	}

	public void setShared(String shared) {
		this.shared = shared;
	}

	public String getUseHTML() {
		return useHTML;
	}

	public void setUseHTML(String useHTML) {
		this.useHTML = useHTML;
	}

	public String getFooterFormat() {
		return footerFormat;
	}

	public void setFooterFormat(String footerFormat) {
		this.footerFormat = footerFormat;
	}

	public String getPointFormat() {
		return pointFormat;
	}

	public void setPointFormat(String pointFormat) {
		this.pointFormat = pointFormat;
	}

	public String getHeaderFormat() {
		return headerFormat;
	}

	public void setHeaderFormat(String headerFormat) {
		this.headerFormat = headerFormat;
	}

	@Override
	public String toString() {
		return "ClassPojo [shared = " + shared + ", useHTML = " + useHTML
				+ ", footerFormat = " + footerFormat + ", pointFormat = "
				+ pointFormat + ", headerFormat = " + headerFormat + "]";
	}
}
