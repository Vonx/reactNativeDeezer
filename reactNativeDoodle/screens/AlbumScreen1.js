import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button, FormLabel, FormInput } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import {CardList} from '../components/cardList';
import * as actions from '../actions';
import { SearchText } from '../components/SearchText';

export default class AlbumScreen1 extends React.Component {

    static navigationOptions = {
        title: 'AlbumScreen',
    };

    constructor() {
        super();
        this.state = {
            searchText: 'eminem',
            albums: null
        };

     this.inputArtist();
    }

    inputArtist () {
        actions.searchTracks(this.state.searchText).then((albums) => {
            this.setState({albums: albums})
        })
    }

    render() {
    // debugger;
        return (
            <ScrollView style={styles.container}>
                <FormLabel containerStyle={styles.center}>Search an Artist</FormLabel>
                <FormInput onChangeText={(event)=>{this.setState({searchText: event})}}/>
                <Button title='search' onPress={()=>{this.inputArtist()}}/>
                <CardList data = {this.state.albums} imageKey={'cover_big'} titleKey={'title'} buttonText={'See more details'} tracklist={'tracklist'}/>
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
});
