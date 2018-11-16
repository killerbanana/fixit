import React from 'react';
import {
    StyleSheet, 
    View, 
    ScrollView,
    Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
export default class ProfileScreen extends React.Component{
    render(){
        return <ExpoConfigView />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});