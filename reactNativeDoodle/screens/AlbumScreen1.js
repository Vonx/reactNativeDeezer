import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import {CardList} from '../components/cardList';
import * as actions from '../actions';

export default class AlbumScreen1 extends React.Component {

    static navigationOptions = {
        title: 'AlbumScreen',
    };

    constructor() {
        super();
        this.state = {
            albums: null/*[
                {
                title: 'Meteora',
                image: 'http://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373',
                    text: 'A special album 1'
                },
                {
                    title: 'Meteora',
                    image: 'http://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373',
                    text: 'A special album 2'
                },
                {
                    title: 'Meteora',
                    image: 'http://cdn.shopify.com/s/files/1/0815/8995/products/linkin_park_meteora_grande.jpg?v=1428823373',
                    text: 'A special album 3'
                }
            ]*/
        };

        actions.searchTracks('eminem').then((albums)=> {
            this.setState({albums: albums})
        })
    }

    render() {
    // debugger;
        return (
            <ScrollView style={styles.container}>
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
