import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="px-4 py-5 mb-2 mt-5 text-center">
        <h1 className="display-5 fw-bold">HILO</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            High or low? Try to guess the number that the computer is thinking
            of with as few guesses as possible! When you guess correctly, you
            will be filled with a warm, fuzzy feeling &ndash; guaranteed!
          </p>
          <p>Guess a number between 1 and 10.</p>
        </div>
      </div>
    );
  }
}

export default Header;
