import React, { Component } from "react";

import styles from "./style";
import loadedImages from "../../assets/loadedImages";
import CardContent from "../CardContent/CardContent";

class GameCard extends Component {
  getImage = name => {
    switch (name) {
      case "Dwarf Fortress":
        return "dwarf_fortress";
        break;
      case "The Sims 2":
        return "the_sims_2";
        break;
      case "Elasto Mania":
        return "elasto_mania";
        break;
      case "Team Fortress 2":
        return "team_fortress";
        break;
      default:
        return "default";
    }
  };

  render() {
    const { name, id, deleteGame, updateGame } = this.props;
    const imgSrc = this.getImage(name);

    return (
      <div style={styles.gameCard}>
        <img style={styles.cardImage} src={loadedImages[imgSrc]} />
        <CardContent
          name={name}
          id={id}
          deleteGame={deleteGame}
          updateGame={updateGame}
        />
      </div>
    );
  }
}

export default GameCard;
