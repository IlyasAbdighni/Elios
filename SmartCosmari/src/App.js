import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import { SearchByAlphabet, ScrollContent } from './components/views';
import Lang from './Language/Lang.json';

class App extends Component {
  state = { list: '' };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ list: response.data }));
  }

  renderTest() {
    const someTestObjs = this.state.list;
    return this.state.list.map(item => <Text>{item.artist}</Text>);
  }

  render() {
    return (
      <View>
        <Header headerText={Lang.wasteDictPage.headerText} />
        <SearchByAlphabet />
        <ScrollContent />
      </View>

    );
  }
}

export default App;
