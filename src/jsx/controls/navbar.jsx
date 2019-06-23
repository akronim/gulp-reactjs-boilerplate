/* requires:
controls\loginForm.js
controls\registerForm.js
controls\modal.js
*/

"use strict";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
      activeForm: ""
    };
  }
  handleModalShowClick(e, activeForm) {
    e.preventDefault();
    this.setState({
      showModal: true,
      activeForm: activeForm
    });
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    });
  }

  formSwitch(activeForm) {
    switch (activeForm) {
      case undefined:
        return null;
      case "Login":
        return <LoginForm />;
      case "Register":
        return <RegisterForm />;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient-marinkoMulberry">
          <div className="container">
            <a className="navbar-brand" href="#" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link text-right" href="#">
                    Product <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-right" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-right" href="#">
                    Pricing
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-toggle="modal"
                  data-target="#Modal"
                  onClick={e => {
                    this.handleModalShowClick(e, "Login");
                  }}
                >
                  <a className="nav-link text-right" href="#">
                    Sign In
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-toggle="modal"
                  data-target="#Modal"
                  onClick={e => {
                    this.handleModalShowClick(e, "Register");
                  }}
                >
                  <a className="nav-link text-right" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.showModal ? (
          <Modal handleModalCloseClick={this.handleModalCloseClick}>
            {this.formSwitch(this.state.activeForm)}
          </Modal>
        ) : null}
      </div>
    );
  }
}
