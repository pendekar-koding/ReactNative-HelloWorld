import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styles from './src/styles/Styles';

type Props = {};
export default class App extends Component {
  render() {
    const test = true;
    if (test) {
      console.log('True');
    } else {
      console.log('False');
    }
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>Hello World</Text>
      </View>
    );
  }
}
