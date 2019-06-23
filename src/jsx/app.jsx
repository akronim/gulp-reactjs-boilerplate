/* requires:
controls\navbar.js
*/

"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navbar />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
