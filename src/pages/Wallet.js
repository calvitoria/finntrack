import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk, fetchExchangeRatesTunk } from '../actions';
import HeaderWallet from '../components/HeaderWallet';
import ExpensesTable from '../components/ExpensesTable';
import AsideMenu from '../components/AsideMenu';

class Wallet extends React.Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Choose',
    tag: 'Choose',
    totalExpense: 0,
  }

  componentDidMount() {
    const { addCurrencieProps } = this.props;
    addCurrencieProps();
  }

  // handleChange
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  // add costs to global state and updates total costs on Header component
  // cada vez que clicar no adc despesa: criar um obj dentro do array expenses com as keys e valores.
  addCost = async (expenses) => {
    const { addExchangeRatesProps } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const obj = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    await addExchangeRatesProps(obj);
    this.setState({ value: 0 });
    this.setState({ description: '' });
  }

  render() {
    const { currencies, expenses } = this.props;
    const { value, description, method, tag, totalExpense } = this.state;
    return (
      <>
        <HeaderWallet totalExpense={ totalExpense } />
        <AsideMenu />
        <form className="form-expense">
          <label htmlFor="expenses">
            Value:
            <input
              id="expenses"
              className="limpaInp"
              data-testid="value-input"
              type="number"
              name="value"
              placeholder="cost"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              id="description"
              name="description"
              data-testid="description-input"
              type="text"
              placeholder="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Currency:
            <select name="currency" id="currency" onChange={ this.handleChange }>
              { currencies.map((currency) => (
                <option key={ currency } value={ currency }>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Payment method:
            <select
              name="method"
              data-testid="method-input"
              id="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="" selected>
                Choose
              </option>
              <option value="Cash">Cash</option>
              <option value="Credit card">Credit card</option>
              <option value="Debit card">Debit card</option>
            </select>
          </label>
          <label htmlFor="tag">
            Category:
            <select
              name="tag"
              data-testid="tag-input"
              id="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="" selected>
                Choose
              </option>
              <option value="Food">Food</option>
              <option value="Leisure">Leisure</option>
              <option value="Work">Work</option>
              <option value="Transportation">Transportation</option>
              <option value="Health">Health</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ () => this.addCost(expenses) }
          >
            Add expense
            <span className="material-symbols-outlined">
              add_task
            </span>
          </button>
        </form>
        <ExpensesTable { ...this.props } />
      </>
    );
  }
}

// ler o estado
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencieProps: () => { dispatch(fetchCurrenciesThunk()); },
  addExchangeRatesProps: (obj) => { dispatch(fetchExchangeRatesTunk(obj)); },
});

Wallet.propTypes = {
  addCurrencieProps: PropTypes.func.isRequired,
  addExchangeRatesProps: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
