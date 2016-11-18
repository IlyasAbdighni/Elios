import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

class ScrollContent extends Component {

  state = { bagNames: [] };

  componentWillMount() {
    axios.get('http://cosmari.e-lios.eu/API/Vocaboli/List')
            .then(response => this.setState({ bagNames: response.data }))
            .catch(error => console.log(error));
  }

  createBagList() {
    const bagList = [];
    const items = this.state.bagNames;
    items.forEach(item => {
      bagList.push(item.NomeVocabolario);
    });

    return bagList;
  }

  renderContent() {
    const bagList = this.createBagList();
    let i = 0;
    return bagList.map((item) => <Text key={i++} style={styles.singleItemStle}>{item}</Text>);
  }

  render() {
    // console.log((this.state.bagNames).forEach(item => { console.log(item.NomeVocabolario); }));
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = {
  singleItemStle: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderColor: '#000'

  }
};

export { ScrollContent };
