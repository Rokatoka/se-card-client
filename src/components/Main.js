import React, { Component } from 'react';
import '../styles/Main.css';

import Card from './Card';

class Main extends Component {

  state = {
    game_info: {
      status: true,
      player: [
        {id: 1, hp: 30, mp: 0},
        {id: 1, hp: 30, mp: 0}
      ],

      player_board: [ {card_id: 1} ],
      opponent_board: [ {card_id: 1} ],

      player_deck: [ {card_id: 1}],
      opponent_deck: [ {card_id: 1}],

      player_hand: [ {card_id: 1}],
      opponent_hand: [ {card_id: 1}]
    }
  };




  render() {
    return (
      <div className="game_container">
        <div className="game">
          {this.renderHand(2)}          
          {this.renderHero(2)}
          {this.renderHeroPow(2)}

          {this.renderBoardHelper(2)}
          {this.renderBoardHelper(1)}
          {this.renderDeck(2)}
          {this.renderDeck(1)}

          {this.renderHero(1)}
          {this.renderHeroPow(1)}
          {this.renderHand(1)}
        </div>
      </div>
    );
  }


  //------HAND ---//
  renderHand(player) {
    return (
      <div className={"hand hand"+player}>
        <p>Hand</p>
      </div>
    );
  }

  //-----Hero---//
  renderHero(player) {
    return (
      <div className={"hero hero"+player}>
        <p>Hero</p>
      </div>
    );
  }

  //-----HeroPow---//
  renderHeroPow(player) {
    return (
      <div className={"hero_pow hero_pow" + player}>
        <p>HeroPow</p>
      </div>
    );
  }



  //-----BoardHelper---//
  renderBoardHelper(player) {
    return (
      <div className={"board_ind board_ind" + player}>
        <Card player={player} />
        <p>board</p>
      </div>
    );
  }

  //-----Deck---//
  renderDeck(player) {
    return (
      <div className={"deck deck" + player}>
        <p>deck</p>
      </div>
    );
  }
}

export default Main;