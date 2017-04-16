import { StyleSheet } from 'react-native';
import Theme from './Theme';

export default {
  error: StyleSheet.create({
    container: {
      backgroundColor: Theme.errorBackground,
    },
    text: {
      color: Theme.errorText,
    },
  }),

  warning: StyleSheet.create({
    container: {
      backgroundColor: Theme.warningBackground,
    },
    text: {
      color: Theme.warningText,
    },
  }),

  notice: StyleSheet.create({
    container: {
      backgroundColor: Theme.noticeBackground,
    },
    text: {
      color: Theme.noticeText,
    },
  }),
}
