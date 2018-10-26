import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Card, Button, FormLabel, FormInput, Icon, List, ListItem, Text } from 'react-native-elements';
import {CardList} from '../components/cardList';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const menuList = [
    {   title: 'Search Albums',
        subTitle: 'Search your favorite music',
        icon: 'music',
        navigateTo: 'AlbumScreen'
    },
    {   title: 'Favorite Collections',
        subTitle: 'Access your favorite albums',
        icon: 'play',
        navigateTo: 'FavoritesScreen'
    },
    {   title: 'Settings',
        subTitle: 'Customize your App',
        icon: 'info',
        navigateTo: '#'
    }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <List containerStyle={{backgroundColor: '#eaeaea', marginTop: 0 }}>
              {menuList.map((item, index)=>{

                  return (
                      <Card key={index}
                            title={item.title}>
                            <View style={styles.cardView}>
                                <Text style={{marginBottom: 10}}>{item.subTitle}</Text>
                                <Icon onPress={() => {{this.props.navigation.navigate(item.navigateTo)}}}
                                      raised
                                      name={item.icon}
                                      type='font-awesome'
                                      color='#f58'
                                      size={30}/>
                            </View>
                        </Card>
                  );
              })}
          </List>
      </ScrollView>
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
    },
    cardView: {
        alignItems: 'center'
  }
});
