import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Dizionari dei rifuiti' />
      </View>

    );
  }
}

export default App;
