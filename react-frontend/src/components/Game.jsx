import React, { Component } from "react";

class Game extends Component {
  state = { guess: 0, guessResult: null, givenUp: false };

  componentDidMount = () => {
    console.log(`calling http://localhost:8080/new-user`);
    fetch(`http://localhost:8080/new-user`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then(
        (result) => {
          const userID = result.replaceAll('"', "");
          this.setState({ userID });
          console.log(`got user id ${userID}`);
        },
        (error) => {
          console.error("some error happened.");
        }
      );
  };

  handleGuess = () => {
    console.log(
      `calling http://localhost:8080/guess?number=${this.state.guess}&userID=${this.state.userID}`
    );
    fetch(
      `http://localhost:8080/guess?number=${this.state.guess}&userID=${this.state.userID}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({ guessResult: result.result });
        },
        (error) => {
          console.error("some error happened.");
        }
      );
  };

  handleGuessChange = (newGuess) => {
    const guess = Number(newGuess);
    this.setState({ guess });
  };

  isGuessValid = () => {
    const g = this.state.guess;
    return Number.isInteger(g) && 1 <= g && g <= 10;
  };

  handleNewGame = () => {
    console.log(
      `calling http://localhost:8080/new-game?userID=${this.state.userID}`
    );
    fetch(`http://localhost:8080/new-game?userID=${this.state.userID}`, {
      method: "POST",
    }).then(
      (result) => {
        console.log(result);
        this.setState({ guessResult: "NEW_GAME", guess: NaN });
      },
      (error) => {
        console.error("some error happened.");
      }
    );
  };

  getGiveUpButton = () => {
    if (this.state.givenUp) {
      return (
        <h3>
          <span className="badge bg-warning text-dark">
            Giving up is not allowed!
          </span>
        </h3>
      );
    }
    return (
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm px-4 mx-1"
        onClick={(evt) => this.setState({ givenUp: true })}
      >
        Give up &#x1F616;
      </button>
    );
  };

  getHiLo = () => {
    if (this.state.guessResult === "HIGH" || this.state.guessResult === "LOW") {
      const badgeColor =
        this.state.guessResult === "HIGH" ? "warning" : "success";
      return (
        <div className="row g-3 align-items-center justify-content-sm-center pt-3">
          <h3>
            <span className={"badge text-dark bg-" + badgeColor}>
              {this.state.guessResult}
            </span>
          </h3>
        </div>
      );
    } else {
      return null;
    }
  };

  getGuessingInterface = () => {
    if (this.state.guessResult !== "CORRECT") {
      return (
        <React.Fragment>
          <div className="row g-3 align-items-center justify-content-sm-center">
            <div className="col-auto">
              <label htmlFor="inputGuess" className="col-form-label">
                What is your guess?
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputGuess"
                className={
                  "form-control" + (this.isGuessValid() ? "" : " is-invalid")
                }
                onChange={(evt) => this.handleGuessChange(evt.target.value)}
                placeholder="Your guess"
              />
            </div>
            <div className="col-auto mb-1">
              <button
                type="button"
                className="btn btn-primary btn-sm px-4 me-sm-3"
                disabled={!this.isGuessValid()}
                onClick={(evt) => this.handleGuess()}
              >
                Guess!
              </button>
              {this.getGiveUpButton()}
            </div>
          </div>
          {this.getHiLo()}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row g-3 align-items-center justify-content-sm-center">
            <div className="spinner-border text-success mx-2" role="status">
              <span>&#x1F973;</span>
            </div>
            <h1>
              <span className="badge rounded-pill bg-success text-light">
                You Won!
              </span>
            </h1>
            <div className="spinner-border text-success mx-2" role="status">
              <span>&#x1F389;</span>
            </div>
          </div>
          <div className="row g-3 align-items-center justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-sm px-4 me-sm-3 my-3"
              onClick={(evt) => this.handleNewGame()}
            >
              Play again!
            </button>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="container">{this.getGuessingInterface()}</div>
      </div>
    );
  }
}

export default Game;
