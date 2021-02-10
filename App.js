import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styles from './src/styles/Styles';

export default class App extends Component<Props> {
  render() {
    console.log('Test Styles');
    return (
      <View style={Styles.view}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}}>
          <Text>Kotak 1</Text>
        </View>
        <View style={{backgroundColor: 'green', width: 50, height: 50}}>
          <Text>Kotak 2</Text>
        </View>
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}}>
          <Text>Kotak 3</Text>
        </View>
      </View>
    );
  }
}
