package hello.model;

import java.util.List;

public class MyPojo {
	private PlotOptions plotOptions;

	private List<Series> series;

	private YAxis yAxis;
	private XAxis xAxis;

	private Title title;

	private Subtitle subtitle;

	private Chart chart;

	private Tooltip tooltip;

	public PlotOptions getPlotOptions() {
		return plotOptions;
	}

	public void setPlotOptions(PlotOptions plotOptions) {
		this.plotOptions = plotOptions;
	}

	public List<Series> getSeries() {
		return series;
	}

	public void setSeries(List<Series> series) {
		this.series = series;
	}

	public YAxis getyAxis() {
		return yAxis;
	}

	public void setyAxis(YAxis yAxis) {
		this.yAxis = yAxis;
	}

	public XAxis getxAxis() {
		return xAxis;
	}

	public void setxAxis(XAxis xAxis) {
		this.xAxis = xAxis;
	}

	public Title getTitle() {
		return title;
	}

	public void setTitle(Title title) {
		this.title = title;
	}

	public Subtitle getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(Subtitle subtitle) {
		this.subtitle = subtitle;
	}

	public Chart getChart() {
		return chart;
	}

	public void setChart(Chart chart) {
		this.chart = chart;
	}

	public Tooltip getTooltip() {
		return tooltip;
	}

	public void setTooltip(Tooltip tooltip) {
		this.tooltip = tooltip;
	}

}
