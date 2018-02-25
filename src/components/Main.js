import React, { Component } from 'react';
import '../styles/Main.css';

class Footer extends Component {
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
      <div className={"hand"+player}>
        <p>Hand</p>
      </div>
    );
  }

  //-----Hero---//
  renderHero(player) {
    return (
      <div className={"hero"+player}>
        <p>Hero</p>
      </div>
    );
  }

  //-----HeroPow---//
  renderHeroPow(player) {
    return (
      <div className={"hero_pow" + player}>
        <p>HeroPow</p>
      </div>
    );
  }

  //-----BoardHelper---//
  renderBoardHelper(player) {
    return (
      <div className={"board_ind" + player}>
        <p>board</p>
      </div>
    );
  }

  //-----Deck---//
  renderDeck(player) {
    return (
      <div className={"deck" + player}>
        <p>deck</p>
      </div>
    );
  }
}

export default Footer;