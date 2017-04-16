import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class TextInputComponent extends React.Component {
  state = {
    text: ""
  }

  _prepareRootProps() {
    const { placeholder } = this.props;
    return {
      placeholder: placeholder,
      style: styles.textInput,
      onChangeText: (text) => this.setState({text}),
      value: this.state.text
    }
  }

  render() {

    return (
      <TextInput {...this._prepareRootProps()} />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1
  }
});
