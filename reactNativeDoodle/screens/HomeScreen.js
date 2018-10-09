import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Navigate to Album Screen'} onPress={() => {this.props.navigation.navigate('AlbumScreen')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    textColor: {
    color: '#d61b1b',
    }
});
