/* eslint-disable react-func/max-lines-per-function */
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

class DoughnutChartCurrency extends React.Component {
  state = {
    USD: 0,
    CAD: 0,
    GBP: 0,
    ARS: 0,
    BTC: 0,
    LTC: 0,
    EUR: 0,
    JPY: 0,
    CHF: 0,
    AUD: 0,
    CNY: 0,
    ILS: 0,
    ETH: 0,
    XRP: 0,
    DOGE: 0,
  }

  componentDidMount() {
    this.setDataState();
  }

  setDataState = () => {
    const { expenses } = this.props;
    console.log(expenses);
    expenses.forEach((element) => {
      switch (element.currency) {
      case 'USD':
        this.setState((prevState) => ({ USD: Number(prevState.USD
          + 1).toFixed(2) }));
        break;
      case 'CAD':
        this.setState((prevState) => ({ CAD:
          Number(prevState.CAD + 1).toFixed(2) }));
        break;

      case 'GBP':
        this.setState((prevState) => ({ GBP:
          Number(prevState.GBP + 1).toFixed(2) }));
        break;
      case 'ARS':
        this.setState((prevState) => ({ ARS:
          Number(prevState.ARS + 1).toFixed(2) }));
        break;
      case 'BTC':
        this.setState((prevState) => ({ BTC:
          Number(prevState.BTC + 1).toFixed(2) }));
        break;
      case 'LTC':
        this.setState((prevState) => ({ LTC:
          Number(prevState.LTC + 1).toFixed(2) }));
        break;
      case 'EUR':
        this.setState((prevState) => ({ EUR:
            Number(prevState.EUR + 1).toFixed(2) }));
        break;
      case 'JPY':
        this.setState((prevState) => ({ JPY:
              Number(prevState.JPY + 1).toFixed(2) }));
        break;
      case 'CHF':
        this.setState((prevState) => ({ CHF:
                Number(prevState.CHF + 1).toFixed(2) }));
        break;
      case 'AUD':
        this.setState((prevState) => ({ AUD:
              Number(prevState.AUD + 1).toFixed(2) }));
        break;
      case 'CNY':
        this.setState((prevState) => ({ CNY:
                Number(prevState.CNY + 1).toFixed(2) }));
        break;
      case 'ILS':
        this.setState((prevState) => ({ ILS:
                  Number(prevState.ILS + 1).toFixed(2) }));
        break;
      case 'ETH':
        this.setState((prevState) => ({ ETH:
                Number(prevState.ETH + 1).toFixed(2) }));
        break;
      case 'XRP':
        this.setState((prevState) => ({ XRP:
                  Number(prevState.XRP + 1).toFixed(2) }));
        break;
      case 'DOGE':
        this.setState((prevState) => ({ DOGE:
                    Number(prevState.DOGE + 1).toFixed(2) }));
        break;
      default:
        return 0;
      }
    });
  };

  render() {
    const { CAD, USD, GBP, ARS, BTC, LTC, EUR,
      JPY, CHF, AUD, CNY, ILS, ETH, XRP, DOGE } = this.state;
    const data = {
      labels: [
        'CAD', 'USD', 'GBP', 'ARS', 'BTC', 'LTC', 'EUR',
        'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE',
      ],
      datasets: [{
        label: 'Expenses by category',
        data: [
          CAD, USD, GBP, ARS, BTC, LTC, EUR,
          JPY, CHF, AUD, CNY, ILS, ETH, XRP, DOGE],
        // data: [10, 20, 30, 40, 50],
        backgroundColor: [
          '#A7C957',
          '#AF87FF',
          '#FF9B71',
          '#E85BC5',
          '#0BA2BE',
          '#F4978E',
          '#8BAAAD ',
          '#FFE45E',
          '#6A6B83',
          '#AEF78E',
          '#FFD2FC',
          '#CAFFB9',
          '#84BC9C',
          '#7D82B8',
          '#D6F7A3',
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

DoughnutChartCurrency.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(DoughnutChartCurrency);
