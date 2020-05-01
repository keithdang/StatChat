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
    var dataArr = [];
    namesList.forEach((person) => {
      dataArr.push({
        name: person.name,
        time: person.speakingTime,
        color: person.color,
      });
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
    peopleChartData.forEach((person) => {
      if (person.time > 0) {
        dataArr.push(person.time);
        labelArr.push(person.name);
        colorArr.push(person.color);
      }
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
