import React, { Component } from 'react';
import Landing from './Landing';


const slides= [
  {
    city: 'Mona Rizvi',
    country: 'Wonder Woman',
    img: 'https://hdqwalls.com/download/gal-gadot-as-wonder-woman-on-2560x1440.jpg',
  },
  {
    city: 'Mark Sterling',
    country: 'Superman',
    img: 'https://www.hdwallpapers.in/walls/superman_in_batman_v_superman_dawn_of_justice-wide.jpg',
  },
  {
    city: 'You',
    country: 'Iron Man',
    img: 'http://www.fonstola.ru/pic/201204/2560x1440/fonstola.ru-76287.jpg',
  },
  {
    city: 'Ben Tylor',
    country: 'Thor',
    img: 'http://www.cutehdwallpapers.com/uploads/large/thor/thor-free-wallpaper.jpg',
  },
  {
    city: 'Askar Boranbay',
    country: 'Spiderman',
    img: 'https://hdqwalls.com/download/spiderman-homecoming-2017-8k-vl-2560x1600.jpg',
  }
  ];

class App extends Component {
  render() {
    return (
      <Landing slides={slides} />
    );
  }
}

export default App;
