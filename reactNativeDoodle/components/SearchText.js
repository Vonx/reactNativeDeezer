import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export class SearchText extends React.Component {

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    onChange(value){
        this.setState({value});
    }
    render() {
        return(
            <React.Fragment>
                <FormLabel containerStyle={styles.center}>Search an Artist</FormLabel>
                <FormInput onChangeText={(event)=>{this.onChange(event)}}/>
                <Button title='search' onPress={()=>{}}/>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }

});