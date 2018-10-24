import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import {CardList} from '../components/cardList';
import * as actions from '../actions';
import { SearchText } from '../components/SearchText';
import { Bars } from 'react-native-loader';

export default class AlbumScreen1 extends React.Component {

    static navigationOptions = {
        title: 'AlbumScreen',
    };

    constructor() {
        super();
        this.state = {
            searchText: '',
            albums: [],
            isFetching: false
        };

     this.inputArtist = this.inputArtist.bind(this);
     this.renderBottomNavigation = this.renderBottomNavigation.bind(this);

    }

    inputArtist = () => {
        this.setState({isFetching: true, albums: []});

        actions.searchTracks(this.state.searchText)
            .then((albums) => {this.setState({albums: albums, isFetching: false})})
            .catch(err => this.setState({albums: [], isFetching: false}))
    };

    async saveAlbumToFavorite(album){
        const favoriteAlbums = await actions.retrieveData('favoriteAlbums') || {};

        if(favoriteAlbums[album.id]) {
            // display message to warn user
            return false;
        }
            favoriteAlbums[album.id] = album;
            const success = await actions.storeData('favoriteAlbums', favoriteAlbums);

            if(success){
                console.log(success);
            }
    }

    renderBottomNavigation(album)  {
        const artist = this.state.searchText;
        return (
            <View style={styles.albumMenu}>
                <Icon onPress={() => {}}
                      raised
                      name='play'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
                <Icon onPress={() => {this.props.navigation.navigate('AlbumDetailScreen', {album, artist})}}
                      raised
                      name='info'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
                <Icon onPress={() => {this.saveAlbumToFavorite(album)}}
                      raised
                      name='thumbs-up'
                      type='font-awesome'
                      color='#f58'
                      size={30}/>
            </View>
        )
    }

    renderAlbumsView = () => {
        return (
        <ScrollView style={styles.container}>
            <FormLabel containerStyle={styles.center}>Search an Artist</FormLabel>
            <FormInput onChangeText={(event) => {
                this.setState({searchText: event})
            }}/>
            <Button title='Search' onPress={() => {
                this.inputArtist()
            }}/>
            {this.state.albums.length > 0 && !this.state.isFetching &&
            <CardList data={this.state.albums} imageKey={'cover_big'} titleKey={'title'} buttonText={'See more details'}
                      tracklist={'tracklist'} bottomView={this.renderBottomNavigation}/>
            }
            {this.state.albums.length === 0 && this.state.isFetching &&
                <Bars style={styles.center} size={20} color="#000000" />
            }
        </ScrollView>
        )
    };

    render() {
    // debugger;
        return this.renderAlbumsView();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    center: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    albumMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});
