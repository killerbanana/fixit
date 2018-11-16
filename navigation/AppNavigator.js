import MainTabNavigator from './MainTabNavigator';
import {createSwitchNavigator} from 'react-navigation';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export class LoginForm extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
          activeOpacity={1}>
            <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{top:-80, left: 20}}>----------------or----------------</Text>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate('Home')}
          activeOpacity={1}>
            <Text style={styles.text1}>REGISTER</Text>
        </TouchableOpacity>
      </Wallpaper>
    );
  }
}
export default createSwitchNavigator({
  Login: LoginForm,
  Home: MainTabNavigator,
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e64a19',
    height: 40,
    borderRadius: 5,
    width:320,
    top:-150,
    left:20,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009688',
    height: 40,
    borderRadius: 5,
    width:320,
    top:-120,
    left:20,
    zIndex: 100,
  },
  text1: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});
