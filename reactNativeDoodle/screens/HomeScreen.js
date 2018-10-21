import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Card, Text, Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import {CardList} from '../components/cardList';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };

    renderHomeCards()  {
        return (
            <ScrollView style={styles.container}>
              <View style={styles.header}>
              <Card style={styles.headerRight} title='Search Albums'>
                <Text style={styles.mainText}h4>Search Albums</Text>
                <Text style={styles.subText} h4>Search your favorite music</Text>
                <Icon containerStyle={{alignSelf: 'center'}}
                      onPress={() => {{this.props.navigation.navigate('AlbumScreen')}}}
                      raised
                      name='play'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
              </Card>
              <Card title='Favorites'>
                <Text style={styles.mainText}h4>Favorite Collections</Text>
                <Text style={styles.subText} h4>Access your favorite albums</Text>
                <Icon containerStyle={{alignSelf: 'center'}}
                      onPress={() => {}}
                      raised
                      name='play'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
              </Card>
              <Card title='Settings'>
                <Text style={styles.mainText}h4>Settings</Text>
                <Text style={styles.subText} h4>Customize your app</Text>
                <Icon containerStyle={{alignSelf: 'center'}}
                      onPress={() => {}}
                      raised
                      name='play'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
              </Card>
              </View>
            </ScrollView>
        )
    }

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Navigate to Album Screen'} onPress={() => {this.props.navigation.navigate('AlbumScreen')}}/>
          {this.renderHomeCards()}
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
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20
    },
    mainText: {
        fontWeight: 'bold',
        color: '#3a3a3a',
        fontSize: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    subText: {
        color: '#3a3a3a',
        fontSize: 17,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
});
