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
      <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
            activeOpacity={1}>
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
      </View>
      </Wallpaper>
    );
  }
}
export default createSwitchNavigator({
  Login: LoginForm,
  Home: MainTabNavigator,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e64a19',
    height: MARGIN,
    borderRadius: 5,
    width:320,
    zIndex: 100,
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
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});
