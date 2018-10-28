import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View, Dimensions
} from 'react-native';
import { Card, Button, FormLabel, FormInput, Icon, List, ListItem, Text } from 'react-native-elements';
import Guitar from '../assets/images/guitar.jpg';
import fav from '../assets/images/fav.jpg';
import settings from '../assets/images/settings.png';
import { Video } from 'expo';
const menuList = [
    {   title: 'Search Albums',
        subTitle: 'Search your favorite music',
        icon: 'music',
        navigateTo: 'AlbumScreen',
        image: Guitar,
        fontColor: '#000'
    },
    {   title: 'Favorite Collections',
        subTitle: 'Access your favorite albums',
        icon: 'play',
        navigateTo: 'FavoritesScreen',
        image: fav,
        fontColor: '#fff',
    },
    {   title: 'Settings',
        subTitle: 'Customize your App',
        icon: 'info',
        navigateTo: 'SettingsScreen',
        image: settings,
        fontColor: '#fff'
    }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };


  /*<Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              shouldPlay
              resizeMode="cover"
              style={{ width, height: 300 }}
          />
           <Image
                              resizeMode="cover"
                              source={item.image}
                              style={styles.backgroundImage}
                          />
                          <Text style={{marginBottom: 10, color: item.fontColor, fontSize: 22}}>{item.subTitle}</Text>
          */
  render() {
      const { width, height } = Dimensions.get('window');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.backgroundVideo}>
            <Video
                source={{ uri: 'http://video2.ignitemotion.com/files/mp4/spinFrame.mp4' }}
                shouldPlay
                isLooping
                resizeMode="cover"
                style={{ width, height }}
                isMuted={true}

            />
            </View>
            <View>
            <List containerStyle={{backgroundColor: 'transparent', marginTop: 0 }}>
                {menuList.map((item, index)=>{

                    return (
                        <Card key={index} title={item.title} containerStyle={{backgroundColor: '#fff'}}>
                            <Image
                                resizeMode="cover"
                                source={item.image}
                                style={styles.backgroundImage}
                            />
                            <View style={styles.cardView}>
                                <Text style={{marginBottom: 0, color: item.fontColor, fontSize: 22}}>{item.subTitle}</Text>
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
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'transparent',
  },
    textColor: {
    color: '#d61b1b',
    },
    cardView: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: 100
  },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    backgroundImage: {
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 100
    },
    containerStyles: {
      backgroundColor: 'transparent',

    },
    blackStyle:{
        backgroundColor: '#000',
    }
});
