import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

import Theme from '../constants/Theme'

class Tab extends React.Component {
  render() {
    const {label, selected, onPress} = this.props
    const tabStyle = selected ? [styles.tab, styles.selected] : styles.tab;

    return (<TouchableOpacity onPress={onPress}
                style={styles.tabContainer}>
              <Text style={tabStyle}>{label.toUpperCase()}</Text>
            </TouchableOpacity>
    );
  }
}

export default class TabFilters extends React.Component {
  render() {
    const { tabs, filterIndex, setFilterIndex } = this.props;
    return (
      <View style={styles.container}>
        <View key="tabs" style={styles.tabsContainer} >
          {
            tabs.map((tabText, index) => {
              const tabProps = {
                label: tabText,
                selected: index === filterIndex,
                onPress: () => setFilterIndex(index)
              };
              return <Tab key={`tab${index}`} {...tabProps}/>
            })
          }
        </View>
        {
          // <View key="underline" style={styles.underline}/>
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
  tabsContainer: {
    flexDirection: "row",
    height: 40
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tab: {
    fontSize: 10,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor2
  },
  selected: {
    color: Theme.fontColor
  },
  underline: {
    justifyContent: "flex-start",
    backgroundColor: Theme.fontColor,
    height: 3,
    borderRadius: 3,
    width: 20
  }
});
