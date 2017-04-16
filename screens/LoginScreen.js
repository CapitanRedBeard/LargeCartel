import React, { PureComponent } from 'react';
import { Animated, Easing, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo'
import { Form, Item, Input } from 'native-base';
import Theme from '../constants/Theme';

export default class LoginScreen extends PureComponent {

  componentWillMount() {
    this._animationValue = new Animated.Value(0);
    this._animation = Animated.timing(this._animationValue, {
        toValue: 1,
        duration: 400,
        ease: Easing.out()
    });
  }

  componentDidMount() {
    this._animation.start();
  }

  _onPress = () => {
    this.props.screenProps && this.props.screenProps();
  }

  render() {
    let translate = this._animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, -10],
        extrapolate: 'clamp'
    });

    return (
      <LinearGradient colors={Theme.gradientColors}
        style={styles.container}>
        <Animated.View style={[styles.headerSection, {opacity: this._animationValue}]}>
          <Image source={require('../assets/icons/white-logo.png')} style={styles.logo}/>
          <Text style={styles.title}>Welcome to Budr</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </Animated.View>

        <Animated.View key='loginSection' style={[styles.loginSection, {bottom: translate}]}>
          <View style={styles.loginWrapper}>
            <Form>
              <Item last>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
            </Form>
            <Text key='forgotText' style={styles.forgotText}> Forgot password?</Text>
            <View key='buttons' style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.signup]}>
                <Text style={[styles.buttonText, styles.signupText]}>SIGN UP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.login]}>
                <Text style={[styles.buttonText, styles.loginText]}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <Text key='orText' style={styles.orText}>- OR -</Text>
            <View key='facebookbuttons' style={styles.buttonContainer}>
              <TouchableOpacity onPress={this._onPress} style={[styles.button, styles.facebookLogin]}>
                <Text style={[styles.buttonText, styles.facebookLoginText]}>Login With Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  headerSection: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    backgroundColor: "transparent"
  },
  logo: {
    width: 64,
    height: 64
  },
  title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: Theme.fontFamily
  },
  subtitle: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontFamily: Theme.fontFamily
  },

  loginSection: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 300,
    backgroundColor: "white",
    borderRadius: 2,
    elevation: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 5
  },
  loginWrapper: {
    flex: 1,
    width: 250,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  signup: {
    marginRight: 5,
    borderWidth: 2,
    borderColor: Theme.tintColor,
    backgroundColor: 'transparent'
  },
  login: {
    marginLeft: 5,
    backgroundColor: Theme.tintColor
  },
  buttonText: {
    fontSize: 12,
    fontFamily: Theme.fontFamily
  },
  loginText: {
    color: "white"
  },
  signupText: {
    color: Theme.tintColor
  },
  forgotText: {
    fontSize: 10,
    margin: 5,
    color: "#AAA",
    textAlign: "right"
  },
  orText: {
    fontWeight: "bold",
    color: "#666",
    padding: 10,
    textAlign: "center"
  },
  facebookLogin: {
    backgroundColor: Theme.facebookColor
  },
  facebookLoginText: {
    color: "white"
  }
});
