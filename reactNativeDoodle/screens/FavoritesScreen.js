import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Alert } from 'react-native';
import { Card, Text, Button, FormInput, Icon, Avatar, List, ListItem } from 'react-native-elements';
import * as actions from '../actions';
import _ from 'lodash';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'FavoritesScreen',
    };

    constructor(){
        super();

        this.state = {
            favoriteAlbums: undefined
        };
        this.getFavoriteAlbums();
    }

    async getFavoriteAlbums(){
        const favoriteAlbums = await actions.retrieveData('favoriteAlbums');

        if (favoriteAlbums){

            this.setState({
                favoriteAlbums: favoriteAlbums
            })
        }

    }

    renderFavoriteTracks(tracks){

        if(tracks) {
            return _.map(tracks, (track, index) => {

                return (
                    <ListItem key={index}
                              title={track.title}
                              leftIcon={{name: 'play-arrow'}}
                              onPress={()=>{Linking.openURL(track.preview)}}/>
                )
            })

        }
    }

    deleteAlbum(albumId) {
        const {favoriteAlbums} = this.state;
        delete favoriteAlbums[albumId];

        const success = actions.storeData('favoriteAlbums', favoriteAlbums);

        if (success) {
            console.log('success happened');
            this.setState({favoriteAlbums});
            this.renderFavoriteAlbums();
        }
    }

    async deleteAlert(albumId){
        Alert.alert(
            ' Are you sure?',
            `This album will be deleted`,
            [
                {text: 'Delete', onPress: () => {this.deleteAlbum(albumId)}},
                {text: 'Go back', onPress: () => console.log('Went back')},
            ],
            { cancelable: false}
        );
    }

    renderFavoriteAlbums(){
        const {favoriteAlbums} = this.state;


        if(favoriteAlbums){
            return _.map(favoriteAlbums, (album, id) => {

                return (
                    <View key={id}>
                        <Card
                            title={album.title} image={{uri: album.cover_big}}>
                                <Button title='Delete Album'
                                raised
                                backgroundColor='#f58'
                                name='trash'
                                onPress={()=>{this.deleteAlert(album.id)}}/>
                            {this.renderFavoriteTracks(album.tracks)}
                        </Card>
                    </View>

                )
            })

        }


    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <List containerStyle={styles.listContainer}>
                    {this.renderFavoriteAlbums()}
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    listContainer: {
        backgroundColor: '#eaeaea'
    }
});