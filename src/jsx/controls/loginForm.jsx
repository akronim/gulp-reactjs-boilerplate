/* requires:
parsley.js
*/

"use strict";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let data = $(this.formElement).getFormData();
    console.log(data);
    $(this.formElement)
      .parsley()
      .reset();

    this.handleCloseClick();
  }

  handleCloseClick() {
    $("#Modal").modal("hide");
  }

  render() {
    return (
      <form
        id="loginForm"
        ref={elem => (this.formElement = elem)}
        onSubmit={e => {
          this.handleFormSubmit(e);
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign In</h5>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Sign In</button>
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
