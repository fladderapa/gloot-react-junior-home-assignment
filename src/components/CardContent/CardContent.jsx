import React, { Component } from "react";

import styles from "./style";
import { editGame } from "../../game-service";

class CardContent extends Component {
  state = {
    editing: false,
    name: this.props.name
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  saveUpdate = (id, name, updateGame) => {
    this.setState({ editing: false });
    updateGame(id, name);
  };

  handleInputChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { editing, name } = this.state;
    const { deleteGame, id, updateGame } = this.props;
    return (
      <div>
        {editing ? (
          <div style={styles.cardContent}>
            <input
              style={{ ...styles.gameTitleInput, ...styles.borderBottom }}
              onChange={this.handleInputChange}
              value={name}
            />
            <div
              onClick={() => this.saveUpdate(id, name, updateGame)}
              style={styles.button}
            >
              Save
            </div>
          </div>
        ) : (
          <div style={styles.cardContent}>
            <input style={styles.gameTitleInput} disabled value={name} />
            <div>
              <i
                style={styles.icon}
                className="material-icons"
                onClick={this.handleEdit}
              >
                edit
              </i>
              <i
                style={styles.icon}
                className="material-icons"
                onClick={() => deleteGame(id)}
              >
                delete
              </i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardContent;
