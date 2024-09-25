import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { darkenColor } from './components/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    const darkerColor = darkenColor(newColor, -30); 
    this.setState({ message: newMessage, backgroundColor: darkerColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#32CD32" 
        />
        <ButtonComponent
          backgroundColor="blue"
          message="Blue button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#0000FF"
        />
        <ButtonComponent
          backgroundColor="brown"
          message="Brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#A52A2A"
        />
        <ButtonComponent
          backgroundColor="yellow"
          message="Yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00"
          textColor="black"
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF0000"
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#000000"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, textColor } = this.props;
    const buttonTextColor = textColor || 'white';

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>
          {backgroundColor.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 27,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginVertical: 27,
    width: '80%', 
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center', 
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
