import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseThunk } from '../actions';

class ExpensesTable extends React.Component {
  // exclui item clicado
  deleteExpense = (expense, id) => {
    const { deleteExpenseProps } = this.props;
    deleteExpenseProps(expense, id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Tag</th>
            <th>Payment method</th>
            <th>Expense</th>
            <th>Currency</th>
            <th>Exchange rate</th>
            <th>Final expense</th>
            <th>Local currency</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses
          && expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>
                {Number((expense.exchangeRates[expense.currency].ask))
                  .toFixed(2)}

              </td>
              <td>
                {parseFloat(expense.value
                * expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteExpense(expenses, expense.id) }
                >
                  <span className="material-symbols-outlined">
                    delete
                  </span>

                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  newExpenses: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseProps: (expenses, id) => { dispatch(deleteExpenseThunk(expenses, id)); },
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpenseProps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
