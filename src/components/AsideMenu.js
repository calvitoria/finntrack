import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AsideMenu extends React.Component {
  render() {
    const { email, name } = this.props;
    return (
      <aside className="sidenav">
        <section>
          <img width={ 60 } className="profile" alt="profileIcon" src="https://user-images.githubusercontent.com/95686401/175792258-78caa4ce-c1e3-45f7-b193-c95c5700c75a.png" />
          <div className="profile-info">
            <h4>
              Welcome back
            </h4>
            <span className="profile-name">{ email }</span>
            <span>
              { name }
            </span>
          </div>
          <div className="icons-menu">
            <Link
              style={ { textDecoration: 'none' } }
              to="/analytics"
              className="insights icon-text"
            >
              <span id="ri" className="material-symbols-outlined insights ri">
                insights
              </span>
              <span className="noDeco">
                Analytics
              </span>
            </Link>
            <Link
              style={ { textDecoration: 'none' } }
              className="icon-text"
              to="/carteira"
            >
              <span className="insights material-symbols-outlined">
                priority
              </span>
              <span>
                Tracker
              </span>
            </Link>
            <a className="icon-text" href="https://github.com/calvitoria">
              <span className="material-symbols-outlined insights">
                code
              </span>
              <span className="noDeco">
                Go to code
              </span>
            </a>
            <a className="icon-text" href="https://www.linkedin.com/in/calvitoria/">
              <span className="material-symbols-outlined insights">
                person_add
              </span>
              <span className="noDeco">
                Connect
              </span>
            </a>
            <a className="icon-text" href="https://www.creditcanada.com/blog/why-use-expense-tracker">
              <span className="material-symbols-outlined insights">
                outbound
              </span>
              <span className="noDeco">
                Advantages
              </span>
            </a>

          </div>
        </section>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  name: state.user.name,
});

AsideMenu.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AsideMenu);
