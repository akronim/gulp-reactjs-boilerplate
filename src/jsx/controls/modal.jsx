"use strict";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const props = this.props;
    $(this.modal).modal("show");

    $(this.modal).on("hidden.bs.modal", function() {
      $(this)
        .find("input,textarea,select")
        .val("")
        .end()
        .find("input[type=checkbox], input[type=radio]")
        .prop("checked", "")
        .end();

      props.handleModalCloseClick();
    });
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          ref={m => (this.modal = m)}
          id="Modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
