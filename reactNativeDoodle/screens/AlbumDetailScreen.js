import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, FormLabel, FormInput, Icon, Avatar, Divider, List, ListItem } from 'react-native-elements';
import * as actions from '../actions';

export default class LinksScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: []
        };
    }

    componentDidMount() {
        const album = this.props.navigation.getParam('album', {});
        debugger;
        actions.getAlbum(album.id)
            .then((tracks) => {this.setState({tracks: tracks});
        console.log(tracks)})
            .catch(err => this.setState({tracks: []}))
    }

    renderTracks() {
        const {tracks} = this.state;
        if (tracks && tracks.length > 0){

            return tracks.map((track, index) => {
                return (

                    <ListItem key={index}
                              title={track.title}
                              leftIcon={{name: 'play-arrow'}}
                              onPress={() => {}}
                              rightIcon={<Icon raised
                                        name='star'
                                        type='font-awesome'
                                        color='#f50'
                                        onPress={()=>{}}
                                   />    }
                    />)
                 })
                }
            }


    render() {
        const album = this.props.navigation.getParam('album', {});
        const artist = this.props.navigation.getParam('artist', '');
        if(album.id){  return (
            <ScrollView style={styles.container}>
                <View>
                    <Avatar xlarge rounded source={{uri: album.cover_medium}}></Avatar>
                  <View>
                      <Text h4>{album.title}</Text>
                      <Text h4>{artist}</Text>
                      <Text h4></Text>


                    <Icon raised
                          name='play'
                          type='font-awesome'
                          color='#f50'
                          size={30}
                          onPress={()=>{}}/>
                  </View>
                </View>
                <Divider style={{backgroundColor: 'black'}}/>
                <List>
                {this.renderTracks()}
                </List>
            </ScrollView>
        );
        }
        else {return (<View><Text>Loading..</Text></View>)}

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});