import React from 'react';
import { 
  Alert,
  ScrollView, 
  StyleSheet,
  View, 
  TouchableOpacity,
  Text 
} from 'react-native';

export default class SoundsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sounds',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.board}>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.board}>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.board}>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  _makeSound(){
    Alert.alert('hi!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  button: {
    backgroundColor: '#4468b0',
    borderRadius: 6,
    padding: 15,
    margin: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
});
