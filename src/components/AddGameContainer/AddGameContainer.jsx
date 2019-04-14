import React, { Component } from "react";

import styles from "./style";

class AddGameContainer extends Component {
  state = {
    name: ""
  };

  createGame = name => {
    const { addGame } = this.props;
    addGame(name);
  };

  inputChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.containerBlock}>
          <div>Add your game now!</div>
        </div>
        <div style={styles.containerBlock}>
          <input
            style={styles.gameTitleInput}
            placeholder="Name"
            onChange={this.inputChange}
            value={name}
          />
          <div style={styles.button} onClick={() => this.createGame(name)}>
            Add game
          </div>
        </div>
      </div>
    );
  }
}

export default AddGameContainer;
