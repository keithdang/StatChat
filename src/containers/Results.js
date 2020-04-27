import React from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.assignDataPoint = this.assignDataPoint.bind(this);
    this.renderChart = this.renderChart.bind(this);
    this.state = {
      peopleChartData: [],
      backgroundColors: [
        "rgba(255,99,132,0.6)",
        "rgba(54,162,235,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(255,206,86,0.6)",
        "rgba(255,159,64,0.6)",
      ],
    };
  }
  componentDidUpdate(prevProps) {
    const { namesList } = this.props;
    if (namesList !== prevProps.namesList) {
      this.assignDataPoint();
    }
  }
  assignDataPoint() {
    const { namesList } = this.props;
    const { backgroundColors } = this.state;
    var dataArr = [];
    var colorNum = 0;
    namesList.forEach((person) => {
      dataArr.push({
        name: person.text,
        time: person.speakingTime,
        color: backgroundColors[colorNum],
      });
      if (colorNum === backgroundColors.length - 1) {
        colorNum = 0;
      } else {
        colorNum++;
      }
    });
    this.setState({
      peopleChartData: dataArr,
    });
  }
  renderChart() {
    const { peopleChartData } = this.state;
    var dataArr = [];
    var labelArr = [];
    var colorArr = [];
    peopleChartData.map((person) => {
      dataArr.push(person.time);
      labelArr.push(person.name);
      colorArr.push(person.color);
    });
    return (
      <Chart
        chartData={{
          labels: labelArr,
          datasets: [
            {
              data: dataArr,
              backgroundColor: colorArr,
            },
          ],
        }}
        title="Talk Times"
        chartType="Pie"
      />
    );
  }
  render() {
    const { peopleChartData } = this.state;
    return (
      <div>
        <header>Results</header>
        {peopleChartData && this.renderChart()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    namesList: state.namesList,
  };
}
export default connect(mapStateToProps)(Results);
