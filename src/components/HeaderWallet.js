import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderWallet extends React.Component {
  // colocar no didMount
  sumExchange = () => {
    const { expenses } = this.props;
    const totalExpense = expenses.reduce((acc, curr) => {
      acc += (curr.value) * (curr.exchangeRates[curr.currency].ask);
      return acc;
    }, 0);
    return totalExpense;
  }

  render() {
    // const { email } = this.props;
    return (
      <header className="header-wallet">
        <section className="left">
          <Link to="/carteira">
            <img className="logo" alt="fintrack" src="https://user-images.githubusercontent.com/95686401/175795293-09bd9458-4441-45ac-b73b-0e95b3d43a15.png" />
          </Link>
          <div className="logo-text">
            <h2>fintrack</h2>
            <span>finance tracker</span>
          </div>
        </section>
        <section className="middle-section">
          <p> Despesa total:  </p>
          <p id="totalExpense" className="thin">
            { parseFloat(this.sumExchange()).toFixed(2) }
          </p>
          <p>
            <span className="thin">   BRL</span>
          </p>
        </section>
        <Link to="/analytics" className="insights-container">
          insights
          <span className="material-symbols-outlined insights">
            insights
          </span>
        </Link>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  // email: state.user.email,
  expenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  // email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(mapStateToProps)(HeaderWallet);
