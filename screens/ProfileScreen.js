import React from 'react';
import {
    StyleSheet, 
    View, 
    ScrollView,
    Text} from 'react-native';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View>
                    <Text>PENGUIN</Text>
                </View>
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