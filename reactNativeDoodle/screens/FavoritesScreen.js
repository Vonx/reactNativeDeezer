import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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

    renderFavoriteAlbums(){
        const {favoriteAlbums} = this.state;


        if(favoriteAlbums){
            return _.map(favoriteAlbums, (album, id) => {

                return (
                    <View key={id}>
                        <Card
                            title={album.title}>
                                <Button title='Delete Album'
                                raised
                                backgroundColor='#f58'
                                name='trash'
                                onPress={()=>{}}/>

                        </Card>
                    </View>

                )
            })

        }


    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <List>
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
});