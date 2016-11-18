import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';

class SearchByAlphabet extends Component {
  state = { textInputValue: '' };


  renderPicker() {
    const alphabet = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((item) => {
      console.log(this.state.letter);
      return (
        <Picker.Item key={item} label={item} value={item} />
      );
    });
  }

  render() {
    return (
      // <Picker
      //   selectedValue={this.state.language}
      //   onValueChange={(lang) => this.setState({ language: lang })}
      // >
      //   <Picker.Item label="A" value="A" />
      //   <Picker.Item label="B" value="B" />
      //   <Picker.Item label="C" value="C" />
      //   <Picker.Item label="D" value="D" />
      //   <Picker.Item label="E" value="E" />
      //   <Picker.Item label="F" value="F" />
      // </Picker>
      <View>
        <Picker
          selectedValue={this.state.letter}
          onValueChange={(lett) => {
            return (this.setState({ letter: lett }));
          }}
        >
          {this.renderPicker()}
        </Picker>
      </View>

    );
  }
}

export { SearchByAlphabet };
