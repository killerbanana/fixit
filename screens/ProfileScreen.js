import React from 'react';
import {
    StyleSheet, 
    View, 
    ScrollView,
    Text} from 'react-native';
import {Icon} from 'native-base';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Icon style={{height:30, width: 30, borderRadius: 5}} name='ios-person'/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});