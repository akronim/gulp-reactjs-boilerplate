/* requires:
parsley.js
*/

"use strict";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleRegisterClick(e) {
    $(this.formElement)
      .parsley()
      .validate();
  }

  handleFormSubmit(e) {
    e.preventDefault();

    $(this.formElement)
      .parsley()
      .validate();

    let isValid = $(this.formElement)
      .parsley()
      .isValid();

    if (isValid) {
      let data = $(this.formElement).getFormData();
      console.log(data);

      $(this.formElement)
        .parsley()
        .reset();

      this.handleCloseClick();
    }
  }

  handleCloseClick() {
    $("#Modal").modal("hide");
  }

  render() {
    return (
      <form
        id="registerForm"
        ref={elem => (this.formElement = elem)}
        onSubmit={e => {
          this.handleFormSubmit(e);
        }}
        data-parsley-validate="true"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                name="registerEmail"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="registerPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    name="registerPassword"
                    placeholder="Enter your password"
                    name="password"
                    required
                    minLength="8"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="registerPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    required="required"
                    data-parsley-equalto="#registerPassword"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" required name="checkbox" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={this.handleRegisterClick}
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={this.handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    );
  }
}
