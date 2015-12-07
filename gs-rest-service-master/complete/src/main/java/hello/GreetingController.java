package hello;

import hello.model.Chart;
import hello.model.Column;
import hello.model.LogIn;
import hello.model.MyPojo;
import hello.model.PlotOptions;
import hello.model.Response;
import hello.model.Series;
import hello.model.Subtitle;
import hello.model.Title;
import hello.model.Tooltip;
import hello.model.XAxis;
import hello.model.YAxis;

import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private static final String desc = "Test Description";
	private final AtomicLong counter = new AtomicLong();

	private static final String tokenId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImFiYyIsInB3ZCI6ImFiYyJ9.857e4f6654fe7ca7dc400c2d5b5c2391a17a9e7760a838cdd5eafeaf6819abe3";

	@RequestMapping(RouteConfig.GPATH)
	public Greeting greeting(
			@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template,
				name), desc);
	}

	@RequestMapping(RouteConfig.CPATH)
	public MyPojo getJson() {

		MyPojo myPojo = new MyPojo();

		Chart mChart = new Chart();
		mChart.setType("column");
		myPojo.setChart(mChart);

		Title mTitle = new Title();
		mTitle.setText("Compliance Over Time");
		myPojo.setTitle(mTitle);

		Subtitle mSubtitle = new Subtitle();
		mSubtitle.setText("A: Stretch   B: Target   C: Threshold");
		myPojo.setSubtitle(mSubtitle);

		XAxis mXAxis = new XAxis();
		mXAxis.setCategories("Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec");
		mXAxis.setCrosshair("true");
		Title title1 = new Title();
		title1.setText("Month");
		mXAxis.setTitle(title1);

		myPojo.setxAxis(mXAxis);

		YAxis mYAxis = new YAxis();
		mYAxis.setMin("0");
		Title title = new Title();
		title.setText("Percentage (%)");
		mYAxis.setTitle(title);
		mYAxis.setMinorTickInterval(40);
		myPojo.setyAxis(mYAxis);

		Tooltip mTooltip = new Tooltip();
		mTooltip.setFooterFormat("</table>");
		mTooltip.setHeaderFormat("<span style='font-size:10px'>{point.key}</span><table>");
		mTooltip.setPointFormat("<tr><td style='color:{series.color};padding:0'>{series.name}: </td> <td style='padding:0'><b>{point.y:.1f}%</b></td></tr>");
		mTooltip.setShared("true");
		mTooltip.setUseHTML("true");
		myPojo.setTooltip(mTooltip);

		PlotOptions mPlotOptions = new PlotOptions();
		Column mColumn = new Column();
		mColumn.setBorderWidth("0");
		mColumn.setPointPadding("0.2");
		mPlotOptions.setColumn(mColumn);
		myPojo.setPlotOptions(mPlotOptions);

		List<Series> mList = new ArrayList<Series>();
		Series mSeries = new Series();
		mSeries.setName("Welser");
		mSeries.setData("49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4");
		mList.add(mSeries);

		Series mSeries1 = new Series();
		mSeries1.setName("Practice");
		mSeries1.setData("83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3");
		mList.add(mSeries1);

		myPojo.setSeries(mList);

		return myPojo;

	}

	// For JSON Response

	@RequestMapping(value = RouteConfig.LOG_IN_JSON, method = RequestMethod.POST)
	public Response getResponseInJson(@RequestBody LogIn mLogIn) {
		Response mResponse = new Response();
		if ("abc".equalsIgnoreCase(mLogIn.getUserName())) {
			mResponse.setSuccess(tokenId);
		} else {
			mResponse.setSuccess("Please Enter Correct userName");
		}
		return mResponse;

	}

	// For XML Response

	@RequestMapping(value = RouteConfig.LOG_IN_XML, method = RequestMethod.POST)
	public String getResponseInXMl(@RequestBody LogIn mLogIn) {
		String outPut = null;
		if ("abc".equalsIgnoreCase(mLogIn.getUserName())) {
			try {
				DocumentBuilderFactory dm = DocumentBuilderFactory
						.newInstance();
				DocumentBuilder documentBuilder = dm.newDocumentBuilder();

				Document doc = documentBuilder.newDocument();
				Element rootElement = doc.createElement("login");
				doc.appendChild(rootElement);

				Element status = doc.createElement("status");
				status.appendChild(doc.createTextNode(tokenId));
				rootElement.appendChild(status);

				TransformerFactory transformerFactory = TransformerFactory
						.newInstance();
				Transformer transformer = transformerFactory.newTransformer();
				DOMSource source = new DOMSource(doc);

				StringWriter writer = new StringWriter();
				StreamResult result = new StreamResult(writer);

				transformer.transform(source, result);
				outPut = writer.getBuffer().toString();

			} catch (ParserConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (TransformerConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (TransformerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} else {
			outPut = "Please Enter Correct userName";
		}
		return outPut;

	}

}
