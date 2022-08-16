/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

class DoughnutChart extends React.Component {
  state = {
    Food: 0,
    Leisure: 0,
    Work: 0,
    Transportation: 0,
    Health: 0,
  };

  componentDidMount() {
    this.setDataState();
  }

  setDataState = () => {
    const { expenses } = this.props;
    console.log(expenses);
    expenses.forEach((element) => {
      switch (element.tag) {
      case 'Food':
        this.setState((prevState) => ({ Food: Number(prevState.Food
          + element.value).toFixed(2) }));
        break;
      case 'Leisure':
        this.setState((prevState) => ({ Leisure:
          Number(prevState.Leisure + element.value).toFixed(2) }));
        break;

      case 'Work':
        this.setState((prevState) => ({ Work:
          Number(prevState.Work + element.value).toFixed(2) }));
        break;
      case 'Transportation':
        this.setState((prevState) => ({ Transportation:
          Number(prevState.Transportation + element.value).toFixed(2) }));
        break;
      case 'Health':
        this.setState((prevState) => ({ Health:
          Number(prevState.Health + element.value).toFixed(2) }));
        break;
      default:
        return 0;
      }
    });
  };

  render() {
    const { Food, Leisure, Work, Transportation, Health } = this.state;
    const data = {
      labels: [
        'Food',
        'Leisure',
        'Work',
        'Transportation',
        'Health',
      ],
      datasets: [{
        label: 'Expenses by category',
        data: [Food, Leisure, Work,
          Transportation, Health],
        // data: [10, 20, 30, 40, 50],
        backgroundColor: [
          '#A7C957',
          '#AF87FF',
          '#FF9B71',
          '#E85BC5',
          '#0BA2BE',
        ],
        hoverOffset: 4,
      }],
    };
    return (
      <Doughnut className="chart" data={ data } />
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

DoughnutChart.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// trocar componente func
// mapstatetoprops
// usar o array expenses direto no componente doughnut
// fazer o cálculo de gastos
export default connect(mapStateToProps)(DoughnutChart);
