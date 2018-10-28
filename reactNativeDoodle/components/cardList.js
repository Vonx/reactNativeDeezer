import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { Card, Button} from 'react-native-elements';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

export class CardList extends React.Component {

    showData() {
        const {data, imageKey, titleKey, buttonText, bottomView} = this.props;

        return (
        <FlatList data={data} keyExtractor={(item, index)=> index.toString()} renderItem={({item, index})=>{ return (
             <Card key={index} title={item[titleKey]} image={{uri: item[imageKey]}}>
                {bottomView(item)}
             </Card>
        );
     }}/>
        );
    }

    render() {

        const data = this.props.data;
        if (data && data.length > 0) {
            return this.showData();
        }
        else {
            return <View style={styles.container}>
                <Bars size={20} color="#000000" />
            </View>
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
});
