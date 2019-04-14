import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { getGames, deleteGame, editGame, addGame } from "./game-service";
import GameCard from "./components/GameCard";
import loadedImages from "./assets/loadedImages.js";
import AddGameContainer from "./components/AddGameContainer";

class App extends Component {
  state = {
    games: []
  };

  componentDidMount = async () => {
    this.getGames();
  };

  getGames = async () => {
    const games = await getGames();
    this.setState({ games });
  };

  updateGame = async (id, name) => {
    await editGame(id, name);
    this.getGames();
  };

  createGame = async name => {
    await addGame(name);
    this.getGames();
  };

  deleteGame = async id => {
    await deleteGame(id);
    this.getGames();
  };

  render() {
    const { games } = this.state;
    return (
      <div className="container">
        <img className="hero-img" src={loadedImages.g_loot_hero_2} />
        <AddGameContainer addGame={this.createGame} />
        <div className="cards-container">
          {games &&
            games.map(game => (
              <GameCard
                key={game.id}
                name={game.name}
                id={game.id}
                deleteGame={this.deleteGame}
                updateGame={this.updateGame}
              />
            ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-container"));
