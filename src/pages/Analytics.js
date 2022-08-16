/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AsideMenu from '../components/AsideMenu';
import DoughnutChart from '../components/DoughnutChart';
import DoughnutChartCurrency from '../components/DoughnutChartCurrency';

class Analytics extends React.Component {
  state = {
    Food: 0,
    Leisure: 0,
    Work: 0,
    Transportation: 0,
    Health: 0,
  };

  setDataState = () => {
    const { expenses } = this.props;
    console.log(expenses);
    expenses.forEach((element) => {
      switch (element.tag) {
      case 'Food':
        this.setState((prevState) => ({ Food: Number(prevState.Food + element.value) }));
        break;
      case 'Leisure':
        this.setState((prevState) => ({ Leisure:
          Number(prevState.Leisure + element.value) }));
        break;

      case 'Work':
        this.setState((prevState) => ({ Work:
          Number(prevState.Work + element.value) }));
        break;
      case 'Transportation':
        this.setState((prevState) => ({ Transportation:
          Number(prevState.Transportation + element.value) }));
        break;
      case 'Health':
        this.setState((prevState) => ({ Health:
          Number(prevState.Health + element.value) }));
        break;
      default:
        break;
      }
    });
  };

  render() {
    // const { Food, Work, Transportation, Leisure, Health } = this.state;
    return (
      <main>
        <Header />
        <AsideMenu />
        <div className="charts">
          <div>
            <p className="title-chart">Expenses by category</p>
            <DoughnutChart
              className="chart"
              // Food={ Food }
              // Work={ Work }
              // Leisure={ Leisure }
              // Transportation={ Transportation }
              // Health={ Health }
            />
          </div>
          <div>
            <p className="title-chart">Expenses by Currency</p>
            <DoughnutChartCurrency
              className="chart"
            />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Analytics.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Analytics);
