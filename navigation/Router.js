import { createRouter } from '@expo/ex-navigation';

import ShopScreen from '../screens/ShopScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  shop: () => ShopScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
