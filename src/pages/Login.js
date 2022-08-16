import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';

class Login extends React.Component {
  state = {
    isEmailValid: false,
    isButtonDisabled: true,
    isNameValid: false,
    email: '',
    name: '',
  }

  // validate login
  validadeLogin = () => {
    const { isEmailValid, isNameValid } = this.state;
    if (isEmailValid && isNameValid) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  // validates email fonte: https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
  checkEmail = ({ target: { value } }) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(value)) { // if its a valid email will return true
      this.setState({ isEmailValid: true }, this.validadeLogin);
      this.setState({ email: value });
    } else {
      this.setState({ isEmailValid: false }, this.validadeLogin);
    }
  }

  // validate name: must have 2 chr.
  checkName = ({ target: { value } }) => {
    const TWO = 2;
    if (value.length >= TWO) {
      this.setState({ isNameValid: true }, this.validadeLogin);
      this.setState({ name: value });
    } else {
      this.setState({ isNameValid: false }, this.validadeLogin);
    }
  }

  // handle click > save email to global state
  handleClick = () => {
    const { addEmailToState, addNameToState } = this.props;
    const { email, name } = this.state;
    addEmailToState(email);
    addNameToState(name);
  }

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <main className="main-login">
        <section className="login">
          <img src="https://user-images.githubusercontent.com/95686401/176060434-33733720-6ea9-42c4-ab0d-4b34c89ac0b0.png" alt="fintrack, track de finanças" />
          <h2>Welcome to Fintrack</h2>
          <p>
            Fintrack is a tool that allows you to
            change the way you interact with money!

          </p>
          <form className="loginForm">
            <label htmlFor="nome">
              {/* Name */}
              <input
                id="nome"
                type="text"
                name="nome"
                placeholder="name"
                // value={ name }
                onChange={ this.checkName }
              />
            </label>
            <label htmlFor="email">
              {/* Email */}
              <input
                id="email"
                data-testid="email-input"
                type="email"
                placeholder="email"
                // value={ email }
                onChange={ this.checkEmail }
              />
            </label>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ isButtonDisabled }
                onClick={ this.handleClick }
              >
                Login
              </button>
            </Link>
          </form>
        </section>
      </main>
    );
  }
}

Login.propTypes = {
  addEmailToState: PropTypes.func.isRequired,
  addNameToState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmailToState: (email) => {
    dispatch(addEmail(email));
  },
  addNameToState: (name) => {
    dispatch(addEmail(name));
  },
});

export default connect(null, mapDispatchToProps)(Login);
