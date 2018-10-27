import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class StyledButton extends React.Component {

    styledButton(){
        const {theButtonText, onPress} = this.props;

        return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{theButtonText}</Text>
                </View>
            </TouchableOpacity>
        );

    }
    render() {
        return this.styledButton();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});
