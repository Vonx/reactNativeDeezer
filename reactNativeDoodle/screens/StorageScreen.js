import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

export default class StorageScreen extends React.Component {
    static navigationOptions = {
        title: 'Storage',
    };

    constructor(){
        super();

        this.state = {
            value: ''
        }
    }

    async storeData() {

        const data = {
          value: 'some testing data'
        };
       const value = await actions.storeData('somekey', data);

       if(value){
           console.log(value)
       }
    }

    async retrieveData() {

        this.setState({
            value: ''
        });
        const data = await actions.retrieveData('favoriteAlbums');

        if (data) {
           /* this.setState({
                value: data.value
            })*/
        }
    }

    async removeData(){
           const success = await actions.clearStorage();

             if(success){
                 this.setState({
                     value: ''
                 })
             }
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>I am a storage screen</Text>
                <Button title='store data' onPress={()=>{this.storeData()}}/>
                <Button title='retrieve data' onPress={()=>{this.retrieveData()}}/>
                <Button title='remove data' onPress={()=>{this.removeData()}}/>

                <Text>{this.state.value}</Text>
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