import React from 'react';
import {
  ListView,
  StyleSheet,
  AsyncStorage,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import * as Product from '../constants/Products';
import Theme from '../constants/Theme'

const THUMB_URLS = {
  bud1: require('../assets/images/bud1.jpg'),
  bud2: require('../assets/images/bud2.jpg'),
  bud3: require('../assets/images/bud3.jpg'),
  bud4: require('../assets/images/bud4.jpg'),
  bud5: require('../assets/images/bud5.jpg'),
  bud6: require('../assets/images/bud6.jpg'),
  edibles1: require('../assets/images/edibles1.jpg'),
  edibles2: require('../assets/images/edibles2.jpg'),
  edibles3: require('../assets/images/edibles3.jpg'),
  edibles4: require('../assets/images/edibles4.jpg'),
  edibles5: require('../assets/images/edibles5.jpg'),
  edibles6: require('../assets/images/edibles6.jpg'),
  puff1: require('../assets/images/puff1.jpg'),
  puff2: require('../assets/images/puff2.jpg'),
  puff3: require('../assets/images/puff3.jpg'),
  puff4: require('../assets/images/puff4.jpg'),
  puff5: require('../assets/images/puff5.jpg'),
  puff6: require('../assets/images/puff6.jpg'),
  other1: require('../assets/images/other1.jpg'),
  other2: require('../assets/images/other2.jpg'),
  other3: require('../assets/images/other3.jpg'),
  other4: require('../assets/images/other4.jpg'),
};

class Row extends React.Component {
  render() {
    const { thumbnail, subtitle, title, price, rowId } = this.props;
    const image = thumbnail && THUMB_URLS[thumbnail] ? <Image key="thumbnail" source={THUMB_URLS[thumbnail]} style={styles.rowImage} resizeMode="contain" /> : null
    console.log("thumbnail", thumbnail, THUMB_URLS[thumbnail]);
    return (
      <View style={styles.rowContainer}>
        { image }
        <View key="descriptionContainer" style={styles.descriptionContainer}>
          <View key="statsContainer" style={styles.statsContainer}>
            <Text key="title" style={styles.title}>{title}</Text>
            <Text key="subtitle" style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View key="priceContainer" style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class ProductList extends React.Component {
  // constructor() {
  //   super();
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     dataSource: ds.cloneWithRows(Product.ProductInfo),
  //   };
  // }

  _renderRow = (data, sectionId, rowId) => {
    // if(data.category === this.props.filter) {
      return <Row {...data} rowId={rowId}/>
    // }
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    // ds.cloneWithRows(Product.ProductInfo),
    // };
    let filteredDataSource = [];
    Product.ProductInfo.forEach((product) => {
      if(product.category === this.props.filter) {
        filteredDataSource.push(product);
      }
    });

    return (
      <View style={styles.listContainer} >
        <ListView key={`list${this.props.filter}`}
          dataSource={ds.cloneWithRows(filteredDataSource)}
          renderRow={this._renderRow}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: Theme.neutralColor,
  },
  rowContainer: {
    flex: 1,
    backgroundColor: "white",
    elevation: 4,
    padding: 12,
    marginTop: 6,
  },
  separator: {
    height: 10,
    flex: 1,
    backgroundColor: Theme.neutralColor
  },
  rowImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 150,
    width: null
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
  },
  statsContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor
  },
  subtitle: {
    fontSize: 12,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor2
  },
  priceContainer: {
    flex: 0,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  priceText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.tintColor
  }
});
// 'use strict';
//
// import React from 'react';
// import ReactNative from 'react-native';
//
// const {
//   FlatList,
//   Animated,
//   Image,
//   Platform,
//   TouchableHighlight,
//   StyleSheet,
//   Switch,
//   Text,
//   TextInput,
//   View,
// } = ReactNative;
//
// type Item = {title: string, text: string, key: number, pressed: boolean, noImage?: ?boolean};
//
// const HORIZ_WIDTH = 200;
//
// const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix \
// civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id \
// integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem \
// vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud \
// modus, putant invidunt reprehendunt ne qui.';
//
// const HEADER = {height: 30, width: 100};
// const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;
//
// export default class ListComponent extends React.PureComponent {
//   static title = '<FlatList> - MultiColumn';
//   static description = 'Performant, scrollable grid of data.';
//
//   state = {
//     data: genItemData(1000),
//     filterText: '',
//     fixedHeight: true,
//     logViewable: false,
//     numColumns: 2,
//     virtualized: true,
//   };
//   _onChangeFilterText = (filterText) => {
//     this.setState(() => ({filterText}));
//   };
//   _onChangeNumColumns = (numColumns) => {
//     this.setState(() => ({numColumns: Number(numColumns)}));
//   };
//   render() {
//     const filterRegex = new RegExp(String(this.state.filterText), 'i');
//     const filter = (item) => (filterRegex.test(item.text) || filterRegex.test(item.title));
//     const filteredData = this.state.data.filter(filter);
//     return (
//       <View stlye={styles.container}>
//         <View style={styles.searchRow}>
//           <View style={styles.listRow}>
//             <PlainInput
//               onChangeText={this._onChangeFilterText}
//               placeholder="Search..."
//               value={this.state.filterText}
//             />
//             <Text>   numColumns: </Text>
//             <PlainInput
//               clearButtonMode="never"
//               onChangeText={this._onChangeNumColumns}
//               value={this.state.numColumns ? String(this.state.numColumns) : ''}
//             />
//           </View>
//           <View style={styles.listRow}>
//             {renderSmallSwitchOption(this, 'virtualized')}
//             {renderSmallSwitchOption(this, 'fixedHeight')}
//             {renderSmallSwitchOption(this, 'logViewable')}
//           </View>
//         </View>
//         <SeparatorComponent />
//         <FlatList
//           ItemSeparatorComponent={SeparatorComponent}
//           ListFooterComponent={FooterComponent}
//           ListHeaderComponent={HeaderComponent}
//           getItemLayout={this.state.fixedHeight ? this._getItemLayout : undefined}
//           data={filteredData}
//           key={this.state.numColumns + (this.state.fixedHeight ? 'f' : 'v')}
//           numColumns={this.state.numColumns || 1}
//           onRefresh={() => alert('onRefresh: nothing to refresh :P')}
//           refreshing={false}
//           renderItem={this._renderItemComponent}
//           disableVirtualization={!this.state.virtualized}
//           onViewableItemsChanged={this._onViewableItemsChanged}
//           legacyImplementation={false}
//         />
//       </View>
//     );
//   }
//   _getItemLayout(data: any, index: number): {length: number, offset: number, index: number} {
//     return getItemLayout(data, index);
//   }
//   _renderItemComponent = ({item}) => {
//     return (
//       <ItemComponent
//         item={item}
//         fixedHeight={this.state.fixedHeight}
//         onPress={this._pressItem}
//       />
//     );
//   };
//   // This is called when items change viewability by scrolling into or out of the viewable area.
//   _onViewableItemsChanged = (info: {
//     changed: Array<{
//       key: string, isViewable: boolean, item: {columns: Array<*>}, index: ?number, section?: any
//     }>},
//   ) => {
//     // Impressions can be logged here
//     if (this.state.logViewable) {
//       console.log('onViewableItemsChanged: ', info.changed.map((v) => ({...v, item: '...'})));
//     }
//   };
//   _pressItem = (key: number) => {
//     pressItem(this, key);
//   };
// }
//
// function genItemData(count: number): Array<Item> {
//   const dataBlob = [];
//   for (let ii = 0; ii < count; ii++) {
//     const itemHash = Math.abs(hashCode('Item ' + ii));
//     dataBlob.push({
//       title: 'Item ' + ii,
//       text: LOREM_IPSUM.substr(0, itemHash % 301 + 20),
//       key: ii,
//       pressed: false,
//     });
//   }
//   return dataBlob;
// }
//
// class ItemComponent extends React.PureComponent {
//   props: {
//     fixedHeight?: ?boolean,
//     horizontal?: ?boolean,
//     item: Item,
//     onPress: (key: number) => void,
//   };
//   _onPress = () => {
//     this.props.onPress(this.props.item.key);
//   };
//   render() {
//     const {fixedHeight, horizontal, item} = this.props;
//     return (
//       <TouchableHighlight
//         onPress={this._onPress}
//         style={horizontal ? styles.horizItem : styles.item}>
//         <View style={[
//           styles.itemRow, horizontal && {width: HORIZ_WIDTH}]}>
//           <Text
//             style={styles.text}
//             numberOfLines={(horizontal || fixedHeight) ? 3 : undefined}>
//             {item.title} - {item.text}
//           </Text>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }
//
// const renderStackedItem = ({item}: {item: Item}) => {
//   return (
//     <View style={styles.stacked}>
//       <Text style={styles.stackedText}>{item.title} - {item.text}</Text>
//     </View>
//   );
// };
//
// class FooterComponent extends React.PureComponent {
//   render() {
//     return (
//       <View>
//         <SeparatorComponent />
//         <View style={styles.headerFooter}>
//           <Text>LIST FOOTER</Text>
//         </View>
//       </View>
//     );
//   }
// }
//
// class HeaderComponent extends React.PureComponent {
//   render() {
//     return (
//       <View>
//         <View style={styles.headerFooter}>
//           <Text>LIST HEADER</Text>
//         </View>
//         <SeparatorComponent />
//       </View>
//     );
//   }
// }
//
// class SeparatorComponent extends React.PureComponent {
//   render() {
//     return <View style={styles.separator} />;
//   }
// }
//
// class Spindicator extends React.PureComponent {
//   render() {
//     return (
//       <Animated.View style={[styles.spindicator, {
//         transform: [
//           {rotate: this.props.value.interpolate({
//             inputRange: [0, 5000],
//             outputRange: ['0deg', '360deg'],
//             extrapolate: 'extend',
//           })}
//         ]
//       }]} />
//     );
//   }
// }
//
// /* eslint no-bitwise: 0 */
// function hashCode(str: string): number {
//   let hash = 15;
//   for (let ii = str.length - 1; ii >= 0; ii--) {
//     hash = ((hash << 5) - hash) + str.charCodeAt(ii);
//   }
//   return hash;
// }
//
// function getItemLayout(data: any, index: number, horizontal?: boolean) {
//   const [length, separator, header] = horizontal ?
//     [HORIZ_WIDTH, 0, HEADER.width] : [84, SEPARATOR_HEIGHT, HEADER.height];
//   return {length, offset: (length + separator) * index + header, index};
// }
//
// function pressItem(context: Object, key: number) {
//   const pressed = !context.state.data[key].pressed;
//   context.setState((state) => {
//     const newData = [...state.data];
//     newData[key] = {
//       ...state.data[key],
//       pressed,
//       title: 'Item ' + key + (pressed ? ' (pressed)' : ''),
//     };
//     return {data: newData};
//   });
// }
//
// function renderSmallSwitchOption(context: Object, key: string) {
//   return (
//     <View style={styles.option}>
//       <Text>{key}:</Text>
//       <Switch
//         style={styles.smallSwitch}
//         value={context.state[key]}
//         onValueChange={(value) => context.setState({[key]: value})}
//       />
//     </View>
//   );
// }
//
// function PlainInput(props: Object) {
//   return (
//     <TextInput
//       autoCapitalize="none"
//       autoCorrect={false}
//       clearButtonMode="always"
//       underlineColorAndroid="transparent"
//       style={styles.searchTextInput}
//       {...props}
//     />
//   );
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   listRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchRow: {
//     padding: 10,
//   },
//   headerFooter: {
//     ...HEADER,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   horizItem: {
//     alignSelf: 'flex-start', // Necessary for touch highlight
//   },
//   item: {
//     flex: 1,
//   },
//   option: {
//     flexDirection: 'row',
//     padding: 8,
//     paddingRight: 0,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#F6F6F6',
//   },
//   searchTextInput: {
//     backgroundColor: 'white',
//     borderColor: '#cccccc',
//     borderRadius: 3,
//     borderWidth: 1,
//     paddingLeft: 8,
//     paddingVertical: 0,
//     height: 26,
//     fontSize: 14,
//     flexGrow: 1,
//   },
//   separator: {
//     height: SEPARATOR_HEIGHT,
//     backgroundColor: 'gray',
//   },
//   smallSwitch: Platform.select({
//     android: {
//       top: 1,
//       margin: -6,
//       transform: [{scale: 0.7}],
//     },
//     ios: {
//       top: 4,
//       margin: -10,
//       transform: [{scale: 0.5}],
//     },
//   }),
//   stacked: {
//     alignItems: 'center',
//     backgroundColor: '#F6F6F6',
//     padding: 10,
//   },
//   thumb: {
//     width: 64,
//     height: 64,
//   },
//   spindicator: {
//     marginLeft: 'auto',
//     marginTop: 8,
//     width: 2,
//     height: 16,
//     backgroundColor: 'darkgray',
//   },
//   stackedText: {
//     padding: 4,
//     fontSize: 18,
//   },
//   text: {
//     flex: 1,
//   },
// });
