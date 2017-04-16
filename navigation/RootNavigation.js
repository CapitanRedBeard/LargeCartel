import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
// import {
//   StackNavigation,
//   TabNavigation,
//   TabNavigationItem,
// } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Alerts from '../constants/Alerts';
import Theme from '../constants/Theme';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';

import ShopScreen from '../screens/ShopScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';



function _renderIcon(name, tintColor) {
  return (
    <FontAwesome
      name={name}
      size={32}
      color={tintColor}
    />
  );
}

const ShopTab = StackNavigator({
  Shop: {
    screen: ShopScreen,
    navigationOptions: {
      title: 'Shop',
    },
  }
});

const LoginStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const RootTabs = TabNavigator(
  {
    Shop: {
      screen: ShopTab,
      navigationOptions: {
        tabBar: {
          label: 'Shop',
          icon: ({ tintColor }) => _renderIcon('home', tintColor)
        },
      },
    },
    Links: {
      screen: LinksScreen,
      navigationOptions: {
        tabBar: {
          label: 'Links',
          icon: ({ tintColor }) => _renderIcon('bookmark', tintColor)
        },
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBar: {
          label: 'Settings',
          icon: ({ tintColor }) => _renderIcon('cogs', tintColor)
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Theme.tintColor
    },
    swipeEnabled: true
  }
);


export default class RootNavigation extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  // _renderTabs() {
  //   return (
  //     <TabNavigation tabBarHeight={56} initialTab="shop">
  //       <TabNavigationItem
  //         id="shop"
  //         renderIcon={isSelected => this._renderIcon('home', isSelected)}>
  //         <StackNavigation initialRoute="shop" />
  //       </TabNavigationItem>
  //
  //       <TabNavigationItem
  //         id="links"
  //         renderIcon={isSelected => this._renderIcon('book', isSelected)}>
  //         <StackNavigation initialRoute="links" />
  //       </TabNavigationItem>
  //
  //       <TabNavigationItem
  //         id="settings"
  //         renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
  //         <StackNavigation initialRoute="settings" />
  //       </TabNavigationItem>
  //     </TabNavigation>
  //   )
  // }

  logIn = () => {
    this.setState({loggedIn: true})
  }

  render() {
    // const { hasLoggedIn } = this.props;
    // return (
    //   <StackNavigation initialRoute="login" >
    //
    //   </StackNavigation>
    // );
    return this.state.loggedIn ? <RootTabs/> : <LoginStack screenProps={this.logIn} />;
    // return <RootTabs />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Theme.tabIconSelected,
  },
});
